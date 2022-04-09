import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCurrentTime } from './useCurrentTime';

const mockDate = new Date('2022-01-01T12:00:00');

beforeEach(() => {
  cleanup();
  jest.useFakeTimers();
  jest.setSystemTime(mockDate);
});

afterEach(() => jest.useRealTimers());

describe('useCurrentSunTIme', () => {
  test('useState の初期値がそれぞれ正しいことを確認', () => {
    const { result } = renderHook(() => useCurrentTime());

    expect(result.current.currentTime).toEqual(mockDate);
    expect(result.current.currentTimeString).toBe('2022年01月01日 12:00:00');
  });

  test('カウント開始から5秒後に想定される時刻に更新されている', () => {
    const { result } = renderHook(() => useCurrentTime());

    expect(result.current.currentTime).toEqual(mockDate);
    expect(result.current.currentTimeString).toBe('2022年01月01日 12:00:00');

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const afterDate = new Date('2022-01-01T12:00:05');
    expect(result.current.currentTime).toEqual(afterDate);
    expect(result.current.currentTimeString).toBe('2022年01月01日 12:00:05');
  });
});
