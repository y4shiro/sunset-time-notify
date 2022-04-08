interface GetTimesResult {
  dawn: Date;
  dusk: Date;
  goldenHour: Date;
  goldenHourEnd: Date;
  nadir: Date;
  nauticalDawn: Date;
  nauticalDusk: Date;
  night: Date;
  nightEnd: Date;
  solarNoon: Date;
  sunrise: Date;
  sunriseEnd: Date;
  sunset: Date;
  sunsetStart: Date;
}

declare module 'suncalc' {
  export function getTimes(
    date: Date,
    latitude: number,
    longitude: number,
    height?: number,
  ): GetTimesResult;
}
