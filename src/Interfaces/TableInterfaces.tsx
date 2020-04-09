export interface ITable {
  data: [];
}

export interface IRow {
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: Date;
  CountryCode: string;
  Country: string;
  Lat: string;
  Lon: string;
  LocationID: string;
}