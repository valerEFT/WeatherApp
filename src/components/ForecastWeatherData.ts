import { useState, useEffect } from "react";
import axios from "axios";

interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
    visibility: number;
  }[];
  city: {
    timezone: number;
    sunset: number;
    sunrise: number;
  };
}

export const useForecastWeatherData = (inputValue: string) => {
  const [forecastData, forecastSetData] = useState<ForecastData | null>(null);
  const [forecastError, forecastSetError] = useState<string | null>(null);

  useEffect(() => {
    const ForecastAPIFetch = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=aca2404c4e92b8c9acf7d6ca33d7b40a`
        );
        forecastSetError(null);
        forecastSetData(response.data);
      } catch (err) {
        forecastSetError("Forecast fetching data: Error!");
        forecastSetData(null);
      }
    };
    inputValue && ForecastAPIFetch();
  }, [inputValue]);

  return { forecastData, forecastError };
};
