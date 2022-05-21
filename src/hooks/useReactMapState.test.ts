import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { useReactMapState } from './useReactMapState';
import { DEFAULT_POSITION } from './../utils/constants';

beforeEach(() => cleanup());

describe('useReactMapState', () => {
  test('Recoil の初期値が正しい事を確認', () => {
    const { result } = renderHook(() => useReactMapState(), {
      wrapper: RecoilRoot,
    });

    expect(result.current.viewState.latitude).toBe(DEFAULT_POSITION.latitude);
    expect(result.current.altitude).toBe(DEFAULT_POSITION.altitude);
    expect(result.current.isMovingMap).toBeFalsy();
  });
});
