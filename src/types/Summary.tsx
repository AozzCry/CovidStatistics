export type Summary = {
  Global: Numbers;
  Countries: [Country];
  Date: string;
};

export type Numbers = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};

export type Country = {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};
