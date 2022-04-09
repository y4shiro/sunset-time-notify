import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useCurrentTime } from './useCurrentTime';

const mockDate = new Date('2022-01-01T12:00:00');

beforeEach(() => cleanup());

afterEach(() => jest.useRealTimers());

describe('useCurrentSunTIme', () => {
  test('useState の初期値がそれぞれ正しいことを確認', () => {
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
    const { result } = renderHook(() => useCurrentTime());

    expect(result.current.currentTime).toEqual(mockDate);
    expect(result.current.currentTimeString).toBe('2022年01月01日 12:00:00');
  });
});
