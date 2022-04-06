import { SunCalc } from 'suncalc';

declare module 'suncalc' {
  export function getTimes(
    date: Date,
    latitude: number,
    longitude: number,
    height?: number,
  ): SunCalc.GetTimesResult;
}
