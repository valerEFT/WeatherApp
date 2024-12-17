import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useForecastWeatherData } from "./ForecastWeatherData";
import TimeTransformer from "./TimeTransformer";

const TodaysHighlight: React.FC = () => {
  const inputValue: string = useSelector(
    (state: RootState) => state.inputValue.value
  );
  const { forecastData } = useForecastWeatherData(inputValue);

  if (!inputValue) {
    return (
      <section className="todays-highlight">
        <p>Search your location...</p>
      </section>
    );
  }
  console.log(forecastData?.list[0].visibility);
  if (inputValue && !forecastData)
    return (
      <section className="todays-highlight">
        <p>Loading...</p>
      </section>
    );

  const sunset = TimeTransformer(forecastData?.city?.sunset ?? 0);
  const sunrise = TimeTransformer(forecastData?.city?.sunrise ?? 0);

  return (
    <section className="todays-highlight">
      <h2 className="todays-highlight__title">Today’s Highlight</h2>
      <div className="todays-highlight__wrapper">
        <div className="todays-highlight__item">
          <h3 className="todays-highlight__weather-status1">
            <img
              className="todays-highlight__weather-status-image"
              src="/images/wind-status.png"
              alt="wind status"
            />
            <span className="todays-highlight__weather-status-title">
              Wind Status
            </span>
          </h3>
          <p className="todays-highlight__status2">
            {forecastData?.list[0].wind.speed}
            <span className="todays-highlight__status2-subtitle"> km/h</span>
          </p>
          <p className="todays-highlight__status3">
            {TimeTransformer(
              forecastData?.list[0]?.dt ?? 0,
              forecastData?.city.timezone
            ).toUpperCase()}
          </p>
        </div>
        <div className="todays-highlight__item">
          <h3 className="todays-highlight__weather-status1">
            <img
              className="todays-highlight__weather-status-image"
              src="/images/humidity.png"
              alt="Humidity"
            />
            <span className="todays-highlight__weather-status-title">
              Humidity
            </span>
          </h3>
          <p className="todays-highlight__status2">
            {forecastData?.list[0].main.humidity}
            <span className="todays-highlight__status2-subtitle"> %</span>
          </p>
          <p className="todays-highlight__status3">
            {TimeTransformer(
              forecastData?.list[0]?.dt ?? 0,
              forecastData?.city.timezone
            ).toUpperCase()}
          </p>
        </div>
        <div className="todays-highlight__item">
          <div className="todays-highlight__sunrise-wrapper">
            <img
              src="/images/sunrise.png"
              alt="sunrise"
              className="todays-highlight__sunrise-img"
            ></img>
            <div className="todays-highlight__sunrise-details-wrapper">
              <p className="todays-highlight__sun">Sunrise</p>
              <p className="todays-highlight__sun-time">
                {sunrise.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="todays-highlight__item">
          <h3 className="todays-highlight__weather-status1">
            <img
              className="todays-highlight__weather-status-image todays-highlight__pressure-image"
              src="/images/pressure.png"
              alt="pressure"
            />
            <span className="todays-highlight__weather-status-title">
              Pressure
            </span>
          </h3>
          <p className="todays-highlight__status2">
            {forecastData?.list[0].main.pressure}
            <span className="todays-highlight__status2-subtitle"> hPa</span>
          </p>
          <p className="todays-highlight__status3">
            {TimeTransformer(
              forecastData?.list[0]?.dt ?? 0,
              forecastData?.city.timezone
            ).toUpperCase()}
          </p>
        </div>
        <div className="todays-highlight__item">
          <h3 className="todays-highlight__weather-status1">
            <img
              className="todays-highlight__weather-status-image"
              src="/images/visibility.png"
              alt="Visibility"
            />
            <span className="todays-highlight__weather-status-title">
              Visibility
            </span>
          </h3>
          <p className="todays-highlight__status2">
            {forecastData ? forecastData?.list[0].visibility / 1000 : 0}
            <span className="todays-highlight__status2-subtitle"> km</span>
          </p>
          <p className="todays-highlight__status3">
            {TimeTransformer(
              forecastData?.list[0]?.dt ?? 0,
              forecastData?.city.timezone
            ).toUpperCase()}
          </p>
        </div>
        <div className="todays-highlight__item">
          <div className="todays-highlight__sunrise-wrapper">
            <img
              src="/images/sunset.png"
              alt="sunset"
              className="todays-highlight__sunset-img"
            ></img>
            <div className="todays-highlight__sunrise-details-wrapper">
              <p className="todays-highlight__sun">Sunset</p>
              <p className="todays-highlight__sun-time">
                {sunset.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysHighlight;
