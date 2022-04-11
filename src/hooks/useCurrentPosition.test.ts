import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCurrentPosition } from './useCurrentPosition';

const geolocationPosition = {
  coords: {
    accuracy: 1,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 1,
    longitude: 1,
    speed: null,
  },
  timestamp: 1,
};

describe('useCurrentPosition', () => {
  let navigatorSpy: jest.SpyInstance<Navigator, []> | undefined;

  beforeEach(() => {
    cleanup();
    const originalNavigator = { ...navigator };
    const originalGeolocation = { ...navigator.geolocation };
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
  });

  afterEach(() => {
    navigatorSpy?.mockRestore();
  });
  test('useState の初期値がそれぞれ正しいことを確認', async () => {
    const { result } = renderHook(() => useCurrentPosition());

    await act(async () => {
      expect(result.current.lat).toBe(0);
      expect(result.current.lon).toBe(0);
      expect(result.current.alt).toBe(0);
      expect(result.current.locationError).toBe('');
      expect(result.current.isLoading).toBeTruthy();
    });
  });
});
