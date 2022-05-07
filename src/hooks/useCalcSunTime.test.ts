import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useCalcSunTime } from './useCalcSunTime';

beforeEach(() => cleanup());
describe('useCurrentSunTIme', () => {
  test('座標と日付を渡すと、それに対応した日の出日の入時刻の文字列を返す', () => {
    const { result } = renderHook(() =>
      useCalcSunTime(35.659241, 139.701144, 0, new Date('2022-01-01T12:00:00')),
    );
    expect(result.current.sunriseTime).toBe('06:52:02');
    expect(result.current.sunsetTime).toBe('16:39:13');
    expect(result.current.isValid).toBeTruthy();
  });

  test('引数で渡ってきた date の値が "Invalid Date" の場合、"不正な日付です" という文字列を返す', () => {
    const { result } = renderHook(() =>
      useCalcSunTime(35.659241, 139.701144, 0, new Date('2022-01-00T12:00:00')),
    );
    expect(result.current.sunriseTime).toBe('不正な日付です');
    expect(result.current.sunsetTime).toBe('不正な日付です');
    expect(result.current.isValid).toBeFalsy();
  });

  test('SunCalc で算出した date の値が "Invalid Date" の場合、"白夜または極夜です" という文字列を返す', () => {
    const { result } = renderHook(() => useCalcSunTime(80, 0, 0, new Date('2022-01-01T12:00:00')));
    expect(result.current.sunriseTime).toBe('白夜または極夜');
    expect(result.current.sunsetTime).toBe('白夜または極夜');
    expect(result.current.isValid).toBeFalsy();
  });
});
