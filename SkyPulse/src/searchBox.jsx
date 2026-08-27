import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== 200 && jsonResponse.cod !== "200") {
                setError(true);
                return null;
            }
            let result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
                visibility: jsonResponse.visibility,
            };
            return result;
        } catch (err) {
            setError(true);
            return null;
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
        if (error) setError(false);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let newInfo = await getWeatherInfo();
        setLoading(false);
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
            setError(false);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" value={city} onChange={handleChange} variant="filled" required />
                <br /><br />
                <Button variant="contained" type="submit" endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SearchIcon />} disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </Button>
                {error && <p className="search-error">No such place exists in our records!</p>}
            </form>
        </div>
    );
}