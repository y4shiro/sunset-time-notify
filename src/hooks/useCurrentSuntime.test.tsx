import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';

import { useCurrentSuntime } from './useCurrentSuntime';
import { altitudeState, longitudeState, latitudeState } from '../stores/currentPositionState';

beforeEach(() => cleanup());
describe('useCurrentSuntime', () => {
  test('任意の日付を渡すと、それに対応した日の出日の入時刻の文字列を返す', () => {
    const { result } = renderHook(() => useCurrentSuntime(new Date('2022-01-01T12:00:00')), {
      wrapper: RecoilRoot,
    });

    expect(result.current.sunriseTime).toBe('06:51:50');
    expect(result.current.sunsetTime).toBe('16:38:54');
    expect(result.current.isValid).toBeTruthy();
  });

  test('引数で渡ってきた date の値が "Invalid Date" の場合、"不正な日付です" という文字列を返す', () => {
    const { result } = renderHook(() => useCurrentSuntime(new Date('2022-01-00T12:00:00')), {
      wrapper: RecoilRoot,
    });

    expect(result.current.sunriseTime).toBe('不正な日付です');
    expect(result.current.sunsetTime).toBe('不正な日付です');
    expect(result.current.isValid).toBeFalsy();
  });

  test('SunCalc で算出した date の値が "Invalid Date" の場合、"白夜または極夜です" という文字列を返す', () => {
    const { result } = renderHook(() => useCurrentSuntime(new Date('2022-01-01T12:00:00')), {
      wrapper: ({ children }) => (
        <RecoilRoot
          initializeState={({ set }) => {
            set(latitudeState, 80);
            set(longitudeState, 0);
            set(altitudeState, 0);
          }}
        >
          {children}
        </RecoilRoot>
      ),
    });

    expect(result.current.sunriseTime).toBe('白夜または極夜');
    expect(result.current.sunsetTime).toBe('白夜または極夜');
    expect(result.current.isValid).toBeFalsy();
  });
});
