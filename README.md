<div align="center">

<img src="./banner.svg" alt="SkyPulse banner" width="100%" />

<br/><br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-9-007FFF?logo=mui&logoColor=white&style=for-the-badge)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-4c1?style=for-the-badge)](./LICENSE)

**A glassmorphism-styled weather app — search any city, get live conditions instantly.**

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## ✨ Features

| | |
|---|---|
| 🔍 | **Instant city search** — type a city, get live weather in seconds |
| 🌡️ | **Full snapshot** — temperature, feels-like, min/max, humidity, wind, visibility |
| 🎨 | **Condition-aware visuals** — background & emoji shift for hot / cold / rainy / hazy |
| 🌍 | **Country flag + tag**, rendered live from the ISO country code |
| 💎 | **Glassmorphism UI** — frosted cards, animated gradient sky, smooth micro-interactions |
| 📱 | **Fully responsive** — mobile to desktop |
| ⚡ | **Loading & error states** — spinner on submit, clear message on invalid city |

---

## 🛠️ Tech Stack

| Category   | Tools |
|------------|-------|
| Framework  | React 19, Vite 8 |
| UI Library | Material UI (MUI) 9, Emotion |
| Fonts      | Fontsource — Outfit |
| API        | [OpenWeatherMap](https://openweathermap.org/api) Current Weather Data |
| Tooling    | oxlint, Babel, React Compiler plugin |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A free [OpenWeatherMap API key](https://home.openweathermap.org/users/sign_up)

### Installation

```bash
git clone https://github.com/dev20082012-spec/SkyPulse-weather-app.git
cd SkyPulse-weather-app
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

> ⚠️ This is a client-only app, so the key is bundled into the JS at build time and technically visible in the browser. Fine for a portfolio project; a production version would route calls through a small backend proxy instead.

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
SkyPulse-weather-app/
├── README.md               ← this file, at repo ROOT
├── banner.svg               ← at repo ROOT, next to README.md
├── src/
│   ├── App.jsx
│   ├── WeatherApp.jsx        # top-level container, holds weather state
│   ├── SearchBox.jsx         # city input + API call
│   ├── InfoBox.jsx           # weather result card
│   ├── WeatherApp.css
│   ├── SearchBox.css
│   ├── InfoBox.css
│   ├── index.css
│   └── main.jsx
├── public/
├── .env                       # not committed — your API key
└── package.json
```

---

## 🗺️ Roadmap

- [ ] Geolocation-based default city instead of a hardcoded fallback
- [ ] 5-day forecast view
- [ ] Recent searches / favorite cities
- [ ] Dark/light theme toggle
- [ ] Unit tests (Vitest + React Testing Library)

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 👤 Author

**Dev** — [@dev20082012-spec](https://github.com/dev20082012-spec)

<div align="center">
Made with ⚛️ React and ☕
</div>
