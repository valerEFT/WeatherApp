import React from "react";
import CityWeather from "./CityWeather";
import OtherCountries from "./OtherCountries";
import TodaysHighlight from "./TodaysHighlight";
import TenDayForecast from "./TenDayForecast";

const Main: React.FC = () => {
  return (
    <div className="main__wrapper">
      <div className="main__left">
        <CityWeather />
        <OtherCountries />
      </div>
      <div className="main__right">
        <TodaysHighlight />
        <TenDayForecast />
      </div>
    </div>
  );
};

export default Main;
