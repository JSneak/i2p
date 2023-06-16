import { useEffect, useState } from "react";
import DateTimeWidget from "../dateTimeWidget/dateTimeWidget";
import getHourlyForecast from "../../utils/getHourlyForecast";
import Hourly from "../hourly/hourly";

export type DashboardType = {
  hourlyLink: string;
};

export interface HourlyForecastType {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: any;
  probabilityOfPrecipitation: ProbabilityOfPrecipitation;
  dewpoint: Dewpoint;
  relativeHumidity: RelativeHumidity;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface ProbabilityOfPrecipitation {
  unitCode: string;
  value: number;
}

export interface Dewpoint {
  unitCode: string;
  value: number;
}

export interface RelativeHumidity {
  unitCode: string;
  value: number;
}

const Dashboard = ({ hourlyLink }: DashboardType) => {
  const [hourlyForecast, setHourlyForecast] = useState<
    HourlyForecastType[] | []
  >([]);

  useEffect(() => {
    if (hourlyLink === "") return;
    getHourlyForecast(hourlyLink).then((response) => {
      setHourlyForecast(response.properties.periods.splice(0, 8));
    });
  }, [hourlyLink]);

  return (
    <div className="main-content flex-1">
      <div className="relative h-[75%] w-full">
        <DateTimeWidget />
        <div className="absolute bottom-0 right-0">
          <div className="mt-8 mr-8 mb-12 text-6xl text-white font-poppins tracking-wide">
            Days Forecast
          </div>
        </div>
      </div>
      <div className="w-full h-[25%] border-t-[1px] flex flex-row">
        {hourlyForecast.map((hour: HourlyForecastType, key: number) => {
          return <Hourly key={key} hour={hour} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
