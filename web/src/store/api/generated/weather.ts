/* eslint-disable -- Auto Generated File */
import { emptySplitApi as api } from "../empty-api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    weatherForecastGetWeatherForecast: build.query<
      WeatherForecastGetWeatherForecastApiResponse,
      WeatherForecastGetWeatherForecastApiArg
    >({
      query: () => ({ url: `/WeatherForecast` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as moviesApi };
export type WeatherForecastGetWeatherForecastApiResponse =
  /** status 200  */ WeatherForecast[];
export type WeatherForecastGetWeatherForecastApiArg = void;
export type WeatherForecast = {
  date?: string;
  temperatureC?: number;
  summary?: string | null;
  temperatureF?: number;
};
export const { useWeatherForecastGetWeatherForecastQuery } = injectedRtkApi;
