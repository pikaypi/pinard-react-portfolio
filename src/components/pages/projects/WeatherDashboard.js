import React from "react";
import image from '../../../images/weather-dashboard.png';

export default function WeatherDashboard() {
    return (
        <div>
            <img src={image} alt={`A screenshot of the Weather Dashboard homepage`} height={100}/>
            <h2>Weather Dashboard</h2>
            <p>This is the description of the Weather Dashboard application</p>
        </div>
    )
}