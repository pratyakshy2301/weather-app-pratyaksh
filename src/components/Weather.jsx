import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import WeatherDetails from './WeatherDetails';
import './weather.css';

const Weather = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    handleSearch('Ghaziabad');
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery('');
  };

  const handleSearch = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=d5c86de0b1094457e7871d5c2a74805d`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '404') {
          setError('City not found');
          setWeatherData(null);
        } else {
          setWeatherData(data);
          console.log(data);
          setError('');
        }
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred');
        setWeatherData(null);
      });
  };

  return (
    <div>
      <div className="weather-container">
        <div className="weather-subcontainer">    
          <SearchForm
            searchQuery={searchQuery}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            />
    <hr></hr>

           {error ? (
             <p className='errors-styles'>{error}</p>
             ) : (
               weatherData && (
                 <WeatherDetails
                 temperatureCelsius={`${Math.round(weatherData.main.temp - 273.15)}°C`}
                 temperatureF={`${Math.round((weatherData.main.temp - 273.15) * (9/5) + 32)}°F`}
                 weatherCondition={weatherData.weather[0].description}
                 weatherIcon={weatherData.weather[0].icon}
                 cityName={weatherData.name}
                 countryName={weatherData.sys.country}
                 humidity={weatherData.main.humidity}
                 wind={weatherData.wind.speed}
                 pressure={weatherData.main.pressure}
                 visibility={weatherData.visibility}
                 />
                 )
                 )}
                 <h4>
                  <p className='end'>I hope this application helped you in getting weather details.</p>
                  <p className='end'>Thanks for using my application.🙌🏻</p>
                </h4>
        </div>
      </div>
    </div>
  );
};

export default Weather;