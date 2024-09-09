import Image from "next/image";

export default function Home() {
  return (
    <div>
      'use client'; // Ensure client-side rendering

import { useState } from 'react';

export default function HomePage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  // Determine the background image based on the weather condition
  const getBackgroundImage = () => {
    if (!weather) return 'url(/default.jpg)'; // Default background
    const condition = weather.weather[0].main.toLowerCase();
    switch (condition) {
      case 'clear':
        return 'url(/sunny.jpg)';
      case 'clouds':
        return 'url(/cloudy.jpg)';
      case 'rain':
        return 'url(/rainy.jpg)';
      case 'snow':
        return 'url(/snowy.jpg)';
      default:
        return 'url(/default.jpg)';
    }
  };

  return (
    <div style={{ backgroundImage: getBackgroundImage(), backgroundSize: 'cover', height: '100vh', color: 'white', textAlign: 'center', padding: '20px' }}>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
      />
      <button onClick={fetchWeather} style={{ margin: '10px', padding: '10px', fontSize: '16px' }}>Get Weather</button>

      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

    </div>
  );
}
