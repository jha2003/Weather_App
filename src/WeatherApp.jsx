import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 26.19,
    humidity: 67,
    temp: 26.19,
    tempMin: 26.19,
    tempMax: 26.19,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
