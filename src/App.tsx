import React, { useEffect } from "react";
import "./App.css";
import getGeocoding from "./utils/getGeocoding";
import { Address } from "./utils/getGeocoding";

const App = () => {
  useEffect(() => {
    /*
      1. Make sure address is in valid format
      2. Make sure that any spaces are replaced with +
      3. Check last item in address.split(',') to make sure it's a valid zip code
    */
    const address: Address = {
      street: "429+South+Abbey+Hill+Lane",
      city: "Palatine",
      state: "IL",
      zip: "60067",
    };
    getGeocoding(address);
  }, []);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

export default App;
