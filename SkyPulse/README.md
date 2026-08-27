# 🌤️ SkyPulse — Live Weather App

A real-time weather application built with **React 19**, **Vite**, and **Material UI (MUI)**. Search any city in the world and instantly get temperature, humidity, wind speed, visibility, and more — wrapped in a premium glassmorphism UI.

---

## ✨ Features

- 🔍 **City search** with error handling for invalid inputs
- 🌡️ **Temperature, Feels Like, Min/Max** display
- 💧 **Humidity** percentage
- 💨 **Wind Speed** in m/s
- 👁️ **Visibility** in km
- 🏳️ **Country flag + code** next to city name
- 🌄 **Dynamic background image** based on weather conditions
- ⏳ **Loading spinner** during API calls
- 📱 **Fully responsive** for mobile devices
- 🎨 **Glassmorphism UI** with animated sky gradient background

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| UI Library | Material UI (MUI) v9 |
| Styling | Vanilla CSS + CSS Variables |
| Font | Outfit (Google Fonts) |
| Data | OpenWeatherMap API |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/skypulse.git
cd skypulse
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your API key
Create a `.env` file in the root of the project:
```bash
cp .env.example .env
```
Then open `.env` and replace the placeholder with your real key:
```
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```
> Get a free API key at [openweathermap.org/api](https://openweathermap.org/api)

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── App.jsx            # Root component
├── WeatherApp.jsx     # State management & layout
├── searchBox.jsx      # Search form + API call
├── InfoBox.jsx        # Weather data card display
├── WeatherApp.css
├── SearchBox.css
├── InfoBox.css
└── index.css          # Global design system
```

---

## 🔐 Security Note

The `.env` file is listed in `.gitignore` and will **never be committed** to version control. Always use `.env.example` as a reference for required variables.
