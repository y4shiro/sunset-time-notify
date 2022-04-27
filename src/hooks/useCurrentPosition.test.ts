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

const geolocationPositionError: GeolocationPositionError = {
  code: 1,
  message: 'hoge',
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 0,
  TIMEOUT: 0,
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

    expect(result.current.latitude).toBe(0);
    expect(result.current.longitude).toBe(0);
    expect(result.current.altitude).toBe(0);
    expect(result.current.locationError).toBe('');
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.latitude).toBe(35.681974167122895);
    expect(result.current.longitude).toBe(139.76716432155922);
    expect(result.current.altitude).toBe(10);
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

    expect(result.current.latitude).toBe(35.681974167122895);
    expect(result.current.longitude).toBe(139.76716432155922);
    expect(result.current.altitude).toBe(0);
    expect(result.current.locationError).toBe('');
    expect(result.current.isLoading).toBeFalsy();
  });

  test('座標の取得に失敗した場合、エラー内容が useState に格納されている', async () => {
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
    navigatorSpy.mockImplementation(() => ({
      ...originalNavigator,
      geolocation: {
        ...originalGeolocation,
        getCurrentPosition: jest.fn().mockImplementation((success, error) => {
          error({ code: 1, message: 'User denied Geolocation' });
        }),
      },
    }));
    const { result, waitForNextUpdate } = renderHook(() => useCurrentPosition());

    await waitForNextUpdate();

    expect(result.current.locationError).toBe('User denied Geolocation');
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
