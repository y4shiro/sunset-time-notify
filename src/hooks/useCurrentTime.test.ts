import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
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
    const { result } = renderHook(() => useCurrentTime(), {
      wrapper: RecoilRoot,
    });

    expect(result.current.currentTime).toEqual(mockDate);
  });

  test('カウント開始から5秒後に想定される時刻に更新されている', () => {
    const { result } = renderHook(() => useCurrentTime(), {
      wrapper: RecoilRoot,
    });

    expect(result.current.currentTime).toEqual(mockDate);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const afterDate = new Date('2022-01-01T12:00:05');
    expect(result.current.currentTime).toEqual(afterDate);
  });
});
