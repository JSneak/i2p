export type Point = {
  lat: string;
  long: string;
};

export type ForecastPair = {
  unitCode: string;
  value: number | null;
};

export type Forecast = {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: any | null;
  probabilityOfPrecipitation: ForecastPair;
  dewpoint: ForecastPair;
  relativeHumidity: ForecastPair;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
};

export type ForecastTuple = [Forecast, Forecast];

const WEATHER_API_URL = "https://api.weather.gov/points/{lat},{long}/";

export const createForecastTuple = (forecasts: Forecast[]) => {
  let forecastTuples: ForecastTuple[] = [];
  for (let i = 0; i < forecasts.length; i += 2) {
    forecastTuples.push([forecasts[i], forecasts[i + 1]]);
  }
  return forecastTuples;
};

const createWeatherUrl = (point: Point) => {
  return WEATHER_API_URL.replace("{long}", point.long.toString()).replace(
    "{lat}",
    point.lat.toString()
  );
};

export const getForecast = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.properties.periods as Forecast[];
    });
};

const getWeather = async (point: Point) => {
  let weather = await fetch(createWeatherUrl(point))
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return weather;
};

export default getWeather;
