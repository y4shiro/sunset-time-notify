import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCurrentPosition } from './useCurrentPosition';

const originalNavigator = { ...navigator };
const originalGeolocation = { ...navigator.geolocation };
const geolocationPosition: GeolocationPosition = {
  coords: {
    accuracy: 1,
    altitude: 10,
    altitudeAccuracy: null,
    heading: null,
    latitude: 35.681974167122895,
    longitude: 139.76716432155922,
    speed: null,
  },
  timestamp: 1,
};

const geolocationPositionWithoutAlt: GeolocationPosition = {
  ...geolocationPosition,
  coords: {
    ...geolocationPosition.coords,
    altitude: null,
  },
};

describe('navigator が存在する場合', () => {
  let navigatorSpy: jest.SpyInstance<Navigator, []> | undefined;

  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    navigatorSpy?.mockRestore();
  });

  test('座標と高さが取得出来る場合、各値が useState に格納されている', async () => {
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
    navigatorSpy.mockImplementation(() => ({
      ...originalNavigator,
      geolocation: {
        ...originalGeolocation,
        getCurrentPosition: (successCallback) => {
          successCallback(geolocationPosition);
        },
      },
    }));

    const { result, waitForNextUpdate } = renderHook(() => useCurrentPosition());

    expect(result.current.lat).toBe(0);
    expect(result.current.lon).toBe(0);
    expect(result.current.alt).toBe(0);
    expect(result.current.locationError).toBe('');
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.lat).toBe(35.681974167122895);
    expect(result.current.lon).toBe(139.76716432155922);
    expect(result.current.alt).toBe(10);
    expect(result.current.locationError).toBe('');
    expect(result.current.isLoading).toBeFalsy();
  });

  test('座標のみ取得出来る場合、各値が useState に格納されている', async () => {
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
    navigatorSpy.mockImplementation(() => ({
      ...originalNavigator,
      geolocation: {
        ...originalGeolocation,
        getCurrentPosition: (successCallback) => {
          successCallback(geolocationPositionWithoutAlt);
        },
      },
    }));
    const { result, waitForNextUpdate } = renderHook(() => useCurrentPosition());

    await waitForNextUpdate();

    expect(result.current.lat).toBe(35.681974167122895);
    expect(result.current.lon).toBe(139.76716432155922);
    expect(result.current.alt).toBe(0);
    expect(result.current.locationError).toBe('');
    expect(result.current.isLoading).toBeFalsy();
  });
});

describe('navigator が undefined の場合', () => {
  let navigatorSpy: jest.SpyInstance<Navigator, []> | undefined;

  beforeEach(() => {
    cleanup();
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
    navigatorSpy.mockImplementation(undefined);
  });

  afterEach(() => {
    navigatorSpy?.mockRestore();
  });

  test('locationError に "お使いのブラウザでは位置情報を取得できません" の文字列が保存されている', async () => {
    const { result } = renderHook(() => useCurrentPosition());

    await act(async () => {
      expect(result.current.locationError).toBe('お使いのブラウザでは位置情報を取得できません');
    });
  });
});
