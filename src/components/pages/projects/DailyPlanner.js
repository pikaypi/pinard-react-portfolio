import React from "react";
import image from '../../../images/daily-planner.png';

export default function DailyPlanner() {
    return (
        <div>
            <img src={image} alt={`A screenshot of the Daily Planner homepage`} height={100}/>
            <h2>Daily Planner</h2>
            <p>This is the description of the Daily Planner application</p>
        </div>
    )
}