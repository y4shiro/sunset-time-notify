import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCurrentPosition } from './useCurrentPosition';

const mockDate = new Date('2022-01-01T12:00:00');

beforeEach(() => {
  cleanup();
});

afterEach(() => {});

describe('useCurrentPosition', () => {
  test('useState の初期値がそれぞれ正しいことを確認', () => {
    const { result } = renderHook(() => useCurrentPosition());

    expect(result.current.lat).toBe(0);
    expect(result.current.lon).toBe(0);
    expect(result.current.alt).toBe(0);
    expect(result.current.locationError).toBe('');
    expect(result.current.isLoading).toBeTruthy();
  });
});
