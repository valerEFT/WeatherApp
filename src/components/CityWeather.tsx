import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useForecastWeatherData } from "./ForecastWeatherData";
import { weatherImages } from "./WeatherImages";

const CityWeather: React.FC = () => {
  const inputValue = useSelector((state: RootState) => state.input.value);

  const { forecastData } = useForecastWeatherData(inputValue);

  if (!inputValue) {
    return (
      <section className="city">
        <p style={{ padding: "24px" }}>Search your location...</p>
      </section>
    );
  }

  if (inputValue && !forecastData)
    return (
      <section className="city">
        <p style={{ padding: "24px" }}>Loading...</p>
      </section>
    );

  const localTimestamp =
    ((forecastData?.list[0]?.dt ?? 0) + (forecastData?.city?.timezone ?? 0)) *
    1000;
  const date = new Date(localTimestamp);

  const dayOfWeek = date.toLocaleDateString("en-GB", {
    weekday: "long",
  });
  const restDate = `${date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  })}, ${date.toLocaleDateString("en-GB", {
    year: "numeric",
  })}`;

  if (!forecastData || !forecastData.list) {
    return <h2 className="city__weather-loading">Loading forecast data...</h2>;
  }

  const maxTemp = forecastData.list[0].main.temp_max - 273.15;
  const minTemp = forecastData.list[0].main.temp_min - 273.15;
  const currentTemp = forecastData.list[0].main.feels_like - 273.15;
  const description = forecastData?.list?.[0]?.weather?.[0]?.description;
  const imagePath = weatherImages[description];

  return (
    <section className="city">
      <div className="city__location">
        {forecastData && (
          <>
            <img
              className="city__location-image"
              src="/images/location.png"
              alt="location"
            />
            <p className="city__location-name">{inputValue}</p>
          </>
        )}
      </div>
      <select name="temp" className="city__select">
        <option value="">°C</option>
      </select>
      <div className="city__date">
        <p className="city__date-week">{dayOfWeek}</p>
        <p className="city__date-rest">{restDate}</p>
      </div>
      <div className="city__weather">
        <div className="city__weather-temp-wrapper">
          <p className="city__weather-temp-max">{Math.round(maxTemp)}°C</p>
          <p className="city__weather-temp-min">/{Math.round(minTemp)}°C</p>
        </div>
        <img className="city__weather-image" src={imagePath} alt="rain" />
        <div className="city__weather-description-wrapper">
          <p className="city__weather-description">{description}</p>
          <p className="city__weather-feels-like">
            Feels like {Math.round(currentTemp)}°
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityWeather;
