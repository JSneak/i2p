import { useState } from "react";
import getGeocoding from "../../utils/getGeocoding";
import getWeather, {
  ForecastTuple,
  Point,
  createForecastTuple,
  getForecast,
} from "../../utils/getWeather";
import Card from "../card/card";
import { formatAddress } from "../../utils/formatAddress";
import Search from "../search/search";

export type SiderbarType = {
  setHourlyLink: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({ setHourlyLink }: SiderbarType) => {
  const [forecasts, setForecasts] = useState<ForecastTuple[]>([]);
  const [search, setSearch] = useState<string>(
    "429 South Abbey Hill Lane, Palatine, IL 60067"
  );

  const searchForWeather = async () => {
    const data = await getGeocoding(formatAddress(search));
    const point: Point = {
      lat: data.y.toString(),
      long: data.x.toString(),
    };
    const forecast = await getWeather(point).then((response) => {
      setHourlyLink(response.properties.forecastHourly);
      return getForecast(response.properties.forecast);
    });
    if (forecast === undefined) return;
    setForecasts(createForecastTuple(forecast));
  };

  const currentTemp = (forecast: ForecastTuple[]) => {
    if (forecast[0] === undefined) return "0°F";
    return forecast[0][0].temperature + "°F";
  };

  const currentWindInfo = (forecast: ForecastTuple[]) => {
    if (forecast[0] === undefined) return "";
    return `${forecast[0][0].windDirection}, ${forecast[0][0].windSpeed}`;
  };

  return (
    <div className="shadow-xl bottom-0 relative h-screen z-10 w-96 content-center bg-[rgba(0,0,0,0.8)]">
      <div className="flex flex-col m-4">
        <div className="flex flex-col">
          <Search
            search={search}
            setSearch={setSearch}
            searchForWeather={searchForWeather}
          />
          <div className="flex flex-col align-middle text-center mt-8 mb-4">
            <div className="text-7xl text-white">{currentTemp(forecasts)}</div>
            <div>{currentWindInfo(forecasts)}</div>
          </div>
        </div>
        <div className="flex flex-col align-middle">
          <div className="text-xl font-poppins text-center my-4">
            The 7 Day Forecast
          </div>
          <div className="flex flex-col">
            {forecasts.map((forecast, key) => {
              if (forecast[0].name !== "Today")
                return <Card key={key} forecast={forecast} />;
              return [];
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
