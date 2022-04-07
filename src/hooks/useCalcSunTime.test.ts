import { renderHook, act } from '@testing-library/react-hooks';
import { useCalcSunTime } from './useCalcSunTime';

describe('useCurrentSunTIme', () => {
  test('特定の座標と日付を渡すと、正しい日の出日の入時刻の文字列を返す', () => {
    const { result } = renderHook(() =>
      useCalcSunTime(35.659241, 139.701144, 0, new Date('2022-01-01T12:00:00')),
    );
    expect(result.current.sunriseTime).toBe('06:52:02');
    expect(result.current.sunsetTime).toBe('16:39:13');
  });
});
