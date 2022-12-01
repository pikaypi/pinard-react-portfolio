import React from 'react';
import resume from '../../images/resume-pdf.pdf'
import resumeImg from '../../images/resume-img.png'
import '../../styles/Resume.css'

function Resume() {
  return (
    <div className='container resume-container'>
      <a href={resume} download>
        <img src={resumeImg} alt="My resume" className='resume'></img>
      </a>
    </div>
  )
}

export default Resume;