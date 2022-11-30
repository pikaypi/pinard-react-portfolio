import React, {useState} from 'react';
import DisplayProject from './DisplayProject';
import SpillinBeansImg from '../../images/spillin-beans.png';
import WeekendPlannerImg from '../../images/weekend-planner.png';
import WeatherDashboardImg from '../../images/weather-dashboard.png'
import DailyPlannerImg from '../../images/daily-planner.png';
import MultipleChoiceImg from '../../images/multiple-choice.png'
import PasswordGeneratorImg from '../../images/password-generator.png';
import Gallery from './Gallery';

function Portfolio() {
  const [currentProject, setCurrentProject] = useState('spillinBeans');

  const renderProject = () => {
    switch (currentProject) {
      case 'spillinBeans':
        return <DisplayProject
          name={`Spillin' Beans`}
          image={SpillinBeansImg}
          url='https://spillin-beans.herokuapp.com/'
          description={`Spillin' Beans is an application that allows users to create, store, and share recipes.`}
        />
      case 'weekendPlanner':
        return <DisplayProject
          name='Extended Weekend Planner'
          image={WeekendPlannerImg}
          url='https://pikaypi.github.io/extended-weekend-planner/'
          description='The Extended Weekend Planner uses your IP address to determine the dates for holidays in your area over the next year.'
        />      
      case 'weatherDashboard':
        return <DisplayProject
          name='Weather Dashboard'
          image={WeatherDashboardImg}
          url='https://pikaypi.github.io/weather-dashboard/'
          description='The Weather Dashboard allows a user to search for a city and view the current weather as well as a five-day forecast.'
        />         
      case 'dailyPlanner':
        return <DisplayProject
          name='Daily Planner'
          image={DailyPlannerImg}
          url='https://pikaypi.github.io/daily-planner/'
          description='The Daily Planner allows a user to store, change, and delete events on a personal calendar.'
        />         
      case 'multipleChoice':
        return <DisplayProject
          name='Multiple Choice Quiz'
          image={MultipleChoiceImg}
          url='https://pikaypi.github.io/multiple-choice-quiz/'
          description='This multiple choice quiz game tests a player on their knowledge of basic programming trivia.'
        />         
      case 'passwordGenerator':
        return <DisplayProject
          name='Password Generator'
          image={PasswordGeneratorImg}
          url='https://pikaypi.github.io/random-password-generator/'
          description='This application will generate a random password of any desired length. This password will include the types of characters desired and only those characters.'
        />          
      default:
        break;
    }
  }

  const handleProjectChange = (project) => setCurrentProject(project)
  
  return (
    <div className='row'>
      <div className='container col-6'>
        {renderProject()}
      </div>
      <div className='container col-6'>
        <Gallery handleProjectChange={handleProjectChange}/>
      </div>
    </div>
  )
}

export default Portfolio;