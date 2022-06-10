export type locationType = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
    altitude: number;
    name: string;
  };
  enabledNotify: boolean;
};
