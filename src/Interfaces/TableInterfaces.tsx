export interface ITable {
  data: [];
}

export interface IRow {
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Province: string;
  City: string;
  CityCode: string;
  Active: number;
  Date: string;
  CountryCode: string;
  Country: string;
  Lat: string;
  Lon: string;
  LocationID: string;
}