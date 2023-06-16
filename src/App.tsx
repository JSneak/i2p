import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Sidebar from "./components/sidebar/sidebar";

export type backgroundVariants = {
  rain: string;
  sun: string;
};

const App = () => {
  const backgroundVariants: backgroundVariants = {
    rain: "bg-rain bg-cover",
    sun: "bg-sun",
  };

  const [background] = useState<keyof backgroundVariants>("rain");
  const [hourlyLink, setHourlyLink] = useState<string>("");

  return (
    <div className="bg-gray-800 font-roboto leading-normal tracking-normal">
      <div
        className={`flex flex-row bg-gray-300 ${backgroundVariants[background]}`}
      >
        <Dashboard hourlyLink={hourlyLink} />
        <Sidebar setHourlyLink={setHourlyLink} />
      </div>
    </div>
  );
};

export default App;
