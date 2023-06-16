import { TiWeatherCloudy } from "react-icons/ti";

export type CardType = {
  date: string;
  day: string;
  dayTemp: number;
  nightTemp: number;
  propabilityOfPrecipitation: number;
  relativeHumidity: number;
  windSpeed: string;
  windDirection: string;
  shortForecast: string;
  detailedForecast: string;
};

const Card = ({ forecast }: { forecast: any }) => {
  const getDay = (date: string) => {
    // Returns the date in the format of "Month Day"
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("en-US", { month: "long" });
    return `${month} ${day}`;
  };

  const getShortDescription = (desc: string) => {
    if (desc.length < 34) return desc;
    return desc.slice(0, 30) + "...";
  };

  return (
    <div className="flex flex-row mb-2 rounded-lg bg-[rgba(192,192,192,0.3)] justify-between">
      <div className="flex flex-row">
        <div className="flex flex-row h-12 w-12 mr-2 rounded-xl justify-center align-center place-items-center bg-[rgba(192,192,192,0.3)]">
          <TiWeatherCloudy className="h-8 w-8 text-gray" />
        </div>
        <div className="flex flex-col">
          <div className="text-white">
            {forecast[0].name}, {getDay(forecast[0].startTime)}
          </div>
          <div className="text-gray-300 text-sm">
            {getShortDescription(forecast[0].shortForecast)}
          </div>
        </div>
      </div>
      <div className="flex flex-col border-l-[1px] border-gray-500 px-4 text-white">
        <div>{forecast[0].temperature}°F</div>
        <div>{forecast[1].temperature}°F</div>
      </div>
    </div>
  );
};

export default Card;
