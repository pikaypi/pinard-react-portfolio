import React from "react";
import spillinBeansImg from '../../images/spillin-beans.png';
import weekendPlannerImg from '../../images/weekend-planner.png';
import weatherDashboardImg from '../../images/weather-dashboard.png';
import dailyPlannerImg from '../../images/daily-planner.png';
import multipleChoiceImg from '../../images/multiple-choice.png';
import passwordGeneratorImg from '../../images/password-generator.png';

export default function Gallery({ handleProjectChange }) {
    return (
        <div className="container">
            <div className="row">
                <div className="card col-4">
                    <a href="#spillinBeans" onClick={() => handleProjectChange('spillinBeans')}>
                        <img src={spillinBeansImg} alt={`A screenshot of the Spillin' Beans homepage`} className={'card-img-top'}/>
                        <div className="card-body">
                            <h3 className="card-title">Spillin' Beans</h3>
                        </div>
                    </a>
                </div>
                <div className="card col-4">
                    <a href="#weekendPlanner" onClick={() => handleProjectChange('weekendPlanner')}>
                        <img src={weekendPlannerImg} alt={`A screenshot of the Extended Weekend Planner homepage`} className={'card-img-top'}/>
                        <div className="card-body">
                            <h3 className="card-title">Extended Weekend Planner</h3>
                        </div>
                    </a>
                </div>
                <div className="card col-4">
                    <a href="#weatherDashboard" onClick={() => handleProjectChange('weatherDashboard')}>
                        <img src={weatherDashboardImg} alt={`A screenshot of the Weather Dashboard homepage`} className={'card-img-top'}/>
                        <div className="card-body">
                            <h3 className="card-title">Weather Dashboard</h3>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="card col-4">
                    <a href="#dailyPlanner" onClick={() => handleProjectChange('dailyPlanner')}>
                        <img src={dailyPlannerImg} alt={`A screenshot of the Daily Planner homepage`} className={'card-img-top'}/>
                        <div className="card-body">
                            <h3 className="card-title">Daily Planner</h3>
                        </div>
                    </a>
                </div>
                <div className="card col-4">
                    <a href="#multipleChoice" onClick={() => handleProjectChange('multipleChoice')}>
                        <img src={multipleChoiceImg} alt={`A screenshot of the Multiple Choice Quiz homepage`} className={'card-img-top'}/>
                        <div className="card-body">
                            <h3 className="card-title">Multiple Choice Quiz</h3>
                        </div>
                    </a>
                </div>
                <div className="card col-4">
                    <a href="#passwordGenerator" onClick={() => handleProjectChange('passwordGenerator')}>
                        <img src={passwordGeneratorImg} alt={`A screenshot of the Password Generator homepage`} className={'card-img-top'}/>
                        <div className="card-body">
                            <h3 className="card-title">Password Generator</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}