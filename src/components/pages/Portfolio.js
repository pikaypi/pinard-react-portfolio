import React, {useState} from 'react';
import SpillinBeans from './projects/SpillinBeans';
import WeekendPlanner from './projects/WeekendPlanner';
import WeatherDashboard from './projects/WeatherDashboard'
import DailyPlanner from './projects/DailyPlanner';
import MultipleChoice from './projects/MultipleChoice'
import PasswordGenerator from './projects/PasswordGenerator';
import Gallery from './Gallery';

function Portfolio() {
  const [currentProject, setCurrentProject] = useState('spillinBeans');

  const renderProject = () => {
    switch (currentProject) {
      case 'spillinBeans':
        return <SpillinBeans />
      case 'weekendPlanner':
        return <WeekendPlanner />    
      case 'weatherDashboard':
        return <WeatherDashboard />
      case 'dailyPlanner':
        return <DailyPlanner />
      case 'multipleChoice':
        return <MultipleChoice />
      case 'passwordGenerator':
        return <PasswordGenerator />
      default:
        break;
    }
  }

  const handleProjectChange = (project) => setCurrentProject(project)
  
  return (
    <div>
      {renderProject()}
      <Gallery handleProjectChange={handleProjectChange}/>
    </div>
  )
}

export default Portfolio;