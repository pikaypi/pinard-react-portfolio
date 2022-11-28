import React, {useState} from 'react';
import PortfolioDisplay from './PortfolioDisplay';
import SpillinBeans from './projects/SpillinBeans';

function Portfolio() {
  const [currentProject, setCurrentProject] = useState('spillinBeans');

  const renderProject = () => {
    switch (currentProject) {
      case 'spillinBeans':
        return <SpillinBeans />    
      default:
        break;
    }
  }

  const handleProjectChange = (project) => setCurrentProject(project)
  
  return (
    <div>
      {renderProject()}
      <p>This is the portfolio gallery</p>
    </div>
  )
}

export default Portfolio;