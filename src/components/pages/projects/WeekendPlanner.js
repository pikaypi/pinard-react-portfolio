import React from "react";
import image from '../../../images/weekend-planner.png';

export default function WeekendPlanner() {
    return (
        <div>
            <img src={image} alt={`A screenshot of the Weekend Planner homepage`} height={100}/>
            <h2>Extended Weekend Planner</h2>
            <p>This is the description of the Extended Weekend Planner application</p>
        </div>
    )
}