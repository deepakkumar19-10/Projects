import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // Sirf Base URL rakhein
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();

      // Agar city galat ho ya API error de
      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like, // small 'l'
        weather: jsonResponse.weather[0].description,
      };

      return result; // 👈 Result return karna zaroori hai
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo); // 👈 App.jsx me naya data bhej rahe hain
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            No such place in our API!
          </p>
        )}
      </form>
    </div>
  );
}
