import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { weatherImages } from "./WeatherImages";

const cityArr5: string[] = [
  "Canberra",
  "Tokyo",
  "Bangladesh",
  "Moscow",
  "peru",
];
const cityArr10: string[] = [
  "Canberra",
  "Tokyo",
  "Bangladesh",
  "Moscow",
  "Peru",
  "Amsterdam",
  "Berlin",
  "Mumbai",
  "Mexico",
  "New York",
];

interface OtherCountriesData {
  city: string;
  weatherType: string;
  maxTemp: number;
  minTemp: number;
  description: string;
}

const OtherCountries: React.FC = () => {
  const [otherCountriesData, setOtherCountriesData] = useState<
    OtherCountriesData[]
  >([]);
  const [otherCountriesError, setOtherCountriesError] = useState<string | null>(
    null
  );

  const [selectedValue, setSelectedValue] = useState<number>(5);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(e.target.value));
  };

  useEffect(() => {
    const fetchCitiesData = async (cities: string[]) => {
      try {
        const data = await Promise.all(
          cities.map(async (city: string) => {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=aca2404c4e92b8c9acf7d6ca33d7b40a`
            );
            return {
              city: response.data.city.name,
              weatherType: response.data.list[0].weather[0].description,
              maxTemp: response.data.list[0].main.temp_max,
              minTemp: response.data.list[0].main.temp_min,
              description: response.data.list[0].weather[0].description,
            };
          })
        );
        setOtherCountriesData(data);
      } catch (err) {
        setOtherCountriesError(
          "Error fetching fetchCitiesData in: OtherCountries.tsx"
        );
        console.log(otherCountriesError);
        setOtherCountriesData([]);
      }
    };
    fetchCitiesData(selectedValue === 5 ? cityArr5 : cityArr10);
  }, [selectedValue]);

  return (
    <section className="other-countries">
      <div className="other-countries__title-wrapper">
        <h2 className="other-countries__title">Other Countries</h2>
        <select
          onChange={handleChange}
          value={selectedValue}
          name="cities"
          className="other-countries__select"
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      {otherCountriesData.map((cityData, index) => (
        <div className="other-countries__wrapper" key={index}>
          <div className="other-countries-left-side-wrapper">
            <h3 className="other-countries__city">{cityData.city}</h3>
            <p className="other-countries__weather-type">
              {cityData.weatherType}
            </p>
          </div>
          <img
            className="other-countries__image"
            src={weatherImages[cityData.description]}
            alt={cityData.description}
          />
          <div className="other-countries-right-side-wrapper">
            <span className="other-countries__temp-max">
              {Math.round(cityData.maxTemp)}°
            </span>
            <span className="other-countries__temp-min">
              /{Math.round(cityData.minTemp)}°
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OtherCountries;
