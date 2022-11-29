import React from "react";
import spillinBeansImg from '../../images/spillin-beans.png';
import weekendPlannerImg from '../../images/weekend-planner.png';
import weatherDashboardImg from '../../images/weather-dashboard.png';
import dailyPlannerImg from '../../images/daily-planner.png';
import multipleChoiceImg from '../../images/multiple-choice.png';
import passwordGeneratorImg from '../../images/password-generator.png';

export default function Gallery({ handleProjectChange }) {
    return (
        <div>
            <a href="#spillinBeans" onClick={() => handleProjectChange('spillinBeans')}>
                <img src={spillinBeansImg} alt={`A screenshot of the Spillin' Beans homepage`} height={100}/>
                <h3>Spillin' Beans</h3>
            </a>
            <a href="#weekendPlanner" onClick={() => handleProjectChange('weekendPlanner')}>
                <img src={weekendPlannerImg} alt={`A screenshot of the Extended Weekend Planner homepage`} height={100}/>
                <h3>Extended Weekend Planner</h3>
            </a>
            <a href="#weatherDashboard" onClick={() => handleProjectChange('weatherDashboard')}>
                <img src={weatherDashboardImg} alt={`A screenshot of the Weather Dashboard homepage`} height={100}/>
                <h3>Weather Dashboard</h3>
            </a>
            <a href="#dailyPlanner" onClick={() => handleProjectChange('dailyPlanner')}>
                <img src={dailyPlannerImg} alt={`A screenshot of the Daily Planner homepage`} height={100}/>
                <h3>Daily Planner</h3>
            </a>
            <a href="#multipleChoice" onClick={() => handleProjectChange('multipleChoice')}>
                <img src={multipleChoiceImg} alt={`A screenshot of the Multiple Choice Quiz homepage`} height={100}/>
                <h3>Multiple Choice Quiz</h3>
            </a>
            <a href="#passwordGenerator" onClick={() => handleProjectChange('passwordGenerator')}>
                <img src={passwordGeneratorImg} alt={`A screenshot of the Password Generator homepage`} height={100}/>
                <h3>Password Generator</h3>
            </a>
        </div>
    )
}