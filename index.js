import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const port = 3000;

// OpenWeatherMap API configuration
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.API_KEY;;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// Home Route
app.get("/", (req, res) => {
    res.render("index.ejs", {weather: null, error: null});
});

app.post("/weather", async (req, res) => {
    const city = req.body.city;
    try {
        // Make API request to OpenWeatherMap
        const result = await axios.get(API_URL, {
            params: {
                q: city, 
                appid: API_KEY,
                units: "metric" //For Celsius temperature
            }
        });

        // Extract relevant data
        const weatherData = {
            city: result.data.name,
            country: result.data.sys.country,
            temperature: Math.round(result.data.main.temp),
            description: result.data.weather[0].description,
            icon: result.data.weather[0].icon,
            humidity: result.data.main.humidity,
            windSpeed: result.data.wind.speed,
            feelsLike: Math.round(result.data.main.feels_like)
        };

        res.render("index.ejs", {weather: weatherData, error: null});
    } catch(error) {
        console.error("Error fetching weather data:", error.message);

        // Handle different error types
        let errorMessage = "Unable to fetch weather data.Please try again.";
        if (error.response) {
            if (error.response.status === 404) {
                errorMessage = `City "${city}" not found. Please check the spelling.`;
            } else if (error.response.status === 401) {
                errorMessage = "API key is invalid. Please check your API configuration.";
            }
        }
        
        res.render("index.ejs", { weather: null, error: errorMessage });
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})