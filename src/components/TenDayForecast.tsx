import { useForecastWeatherData } from "./ForecastWeatherData";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { weatherImages } from "./WeatherImages";
import { renderWeekend } from "./TimeTransformer";

const TenDayForecast: React.FC = () => {
  const inputValue = useSelector((state: RootState) => state.input.value);
  const { forecastData } = useForecastWeatherData(inputValue);

  if (!inputValue) {
    return (
      <section className="forecast">
        <p>Search your location...</p>
      </section>
    );
  }

  if (!forecastData) {
    return (
      <section className="forecast">
        <p>Loading...</p>
      </section>
    );
  }

  const fullDay = forecastData.list.filter((_, i: number) => i % 8 === 0);
  const timezone = forecastData.city.timezone;

  return (
    <section className="forecast">
      <h3 className="forecast__title">5 Day Forecast</h3>
      <div className="forecast__card-container">
        {fullDay.map((list, index: number) => (
          <div key={index} className="forecast__card">
            <div className="forecast__card-inner-container">
              <p className="forecast__weekday">
                {renderWeekend(list.dt, timezone)}
              </p>
              <img
                className="forecast__image"
                src={
                  weatherImages[
                    list.weather[0].description.trim().toLowerCase()
                  ]
                }
                alt={list.weather[0].description}
              />
              <p className="forecast__temp">
                {Math.round(list.main.temp - 273.15)}°C
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenDayForecast;
