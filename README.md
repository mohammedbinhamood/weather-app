# 🌤️ Weather App

A simple and beautiful weather application built with Express.js and OpenWeatherMap API that allows users to search for current weather conditions in any city worldwide.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature, feels like, humidity, and wind speed
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Fully responsive design
- ❌ Error handling for invalid cities and API issues

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/mohammedbinhamood/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Get your free API key:
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

4. Add your API key:
   - Open `index.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

5. Start the server:
```bash
nodemon index.js
```

6. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
weather-app/
│
├── public/
│   └── styles/
│       └── style.css          # Styling
│
├── views/
│   └── index.ejs             # Main template
│
├── index.js                  # Server file
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## 🛠️ Technologies Used

- **Express.js** - Web framework
- **Axios** - HTTP client for API requests
- **EJS** - Templating engine
- **OpenWeatherMap API** - Weather data provider

## 🎯 How It Works

1. User enters a city name in the search form
2. App sends a POST request to `/weather` endpoint
3. Server makes an API call to OpenWeatherMap using Axios
4. Weather data is retrieved and formatted
5. Data is rendered on the page using EJS templates
6. Errors are caught and displayed user-friendly messages

## 📝 API Reference

This app uses the OpenWeatherMap Current Weather Data API:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Documentation: [OpenWeatherMap API Docs](https://openweathermap.org/current)

## 🐛 Error Handling

The app handles various error scenarios:
- Invalid city names (404 error)
- Invalid API key (401 error)
- Network issues
- Server errors

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

ISC

## 👨‍💻 Author
[@mohammmedbinhammod](https://instagram.com/mohd_binhamood)

---

**Note:** Remember to never commit your API key to GitHub. Consider using environment variables for production.