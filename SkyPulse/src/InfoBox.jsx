import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1074&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-08f2322b7527?q=80&w=1074&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1074&auto=format&fit=crop";
    const HAZE_URL = "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?q=80&w=1074&auto=format&fit=crop";

    let getImage = () => {
        if (info.humidity > 80) return RAIN_URL;
        if (info.weather.toLowerCase().includes("haze") || info.weather.toLowerCase().includes("mist") || info.weather.toLowerCase().includes("fog")) return HAZE_URL;
        if (info.temp > 15) return HOT_URL;
        return COLD_URL;
    };

    let getEmoji = () => {
        if (info.humidity > 80) return "🌧️";
        if (info.weather.toLowerCase().includes("haze") || info.weather.toLowerCase().includes("mist")) return "🌫️";
        if (info.weather.toLowerCase().includes("cloud")) return "☁️";
        if (info.weather.toLowerCase().includes("snow")) return "❄️";
        if (info.temp > 30) return "🔥";
        if (info.temp > 15) return "☀️";
        return "🌨️";
    };

    let getCountryFlag = (countryCode) => {
        if (!countryCode) return "";
        return countryCode
            .toUpperCase()
            .split("")
            .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
            .join("");
    };

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 420, width: "100%" }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={getImage()}
                        title={info.weather}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {getEmoji()} {info.city.charAt(0).toUpperCase() + info.city.slice(1)}
                            {info.country && (
                                <span className="country-tag">
                                    {getCountryFlag(info.country)} {info.country}
                                </span>
                            )}
                        </Typography>

                        <div className="weather-stats">
                            <div className="stat-item">
                                <span className="stat-label">Temperature</span>
                                <span className="stat-value">{info.temp.toFixed(1)} °C</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Feels Like</span>
                                <span className="stat-value">{info.feelslike.toFixed(1)} °C</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Humidity</span>
                                <span className="stat-value">{info.humidity}%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Min / Max</span>
                                <span className="stat-value">{info.tempMin.toFixed(0)}° – {info.tempMax.toFixed(0)}°</span>
                            </div>
                            {info.windSpeed != null && (
                                <div className="stat-item">
                                    <span className="stat-label">Wind Speed</span>
                                    <span className="stat-value">{info.windSpeed} m/s</span>
                                </div>
                            )}
                            {info.visibility != null && (
                                <div className="stat-item">
                                    <span className="stat-label">Visibility</span>
                                    <span className="stat-value">{(info.visibility / 1000).toFixed(1)} km</span>
                                </div>
                            )}
                        </div>

                        <div className="weather-description">
                            {info.weather}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
