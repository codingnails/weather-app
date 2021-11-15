import React, { useState } from 'react'
import "./weather.scss"

export const Weather = () => {
    
    const apiKey = '67432c036f3c8be0fd747f3c0057087d';
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")


    const getWeather = (event) => {

        if(event.key === "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(
                response => response.json()
            )
            .then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }

    }


    return (
        <div className="container">

            
            <h1>Welcome to Weather App </h1>

            <input className = "input" 
            placeholder="Enter City..."
            onChange = {e => setCity(e.target.value)}
            value = {city}
                onKeyPress={getWeather} />
            


            {typeof weatherData.main === 'undefined' ? (
                <div>
                    
                </div>
            ) : (
                    <div className= "weather-data">
                        <p className= "city">{ weatherData.name}</p>
                        <p className = "temp">{ weatherData.main.temp} F</p>
                        <p className = "weather">{ weatherData.weather[0].main}</p>
                       
                    </div>
            )}

            {
                weatherData.cod === "404" ? (
                    <p className = "errorNotFound">
                        Oops! City not found. Please try again.
                    </p>
                ) :
                    (
                        <>
                            </>
                    )
            }


        </div>
            
    )
}
