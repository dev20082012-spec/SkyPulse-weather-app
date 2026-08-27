import { useState } from 'react';
import SearchBox from './searchBox.jsx';
import InfoBox from './InfoBox.jsx';
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        country: "IN",
        feelslike: 24.84,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        humidity: 74,
        weather: "haze",
        windSpeed: 3.1,
        visibility: 4000,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp">
            <div className="app-header">
                <h1>SkyPulse</h1>
                <p className="app-subtitle">Real-time weather at your fingertips</p>
            </div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}