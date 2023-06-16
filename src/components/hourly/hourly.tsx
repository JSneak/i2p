import { TiWeatherCloudy } from "react-icons/ti";
import { HourlyForecastType } from "../dashboard/dashboard";

const Hourly = ({ hour }: { hour: HourlyForecastType }) => {
  const getHour = (time: string) => {
    const dateObj = new Date(time);
    return dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
  };

  return (
    <div className="flex flex-col rounded-lg bg-[rgba(0,0,0,0.42)] mx-4 my-6 p-2 w-24 items-center font-poppins">
      <div className="text-white border-b-[1px]">{getHour(hour.startTime)}</div>
      <div className="h-12 w-12 rounded-xl bg-[rgba(192,192,192,0.3)] my-4">
        <TiWeatherCloudy className="h-12 w-12 text-gray" />
      </div>
      <div className="text-white">{hour.temperature}°F</div>
    </div>
  );
};

export default Hourly;
