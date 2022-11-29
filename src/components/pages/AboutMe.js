import React from 'react';
import picture from '../../images/profile-picture.jpg';


function AboutMe() {
  return (
      <div className='row'>
        <img src={picture} alt='Me running my first half marathon' className='col-4'/>
        <div className='col-8'>
          <p>My name is Paul Pinard and I am training to become a web developer. My first exposure to coding was in high school when I learned to style my MySpace page, and I have been building on that knowledge ever since. My favorite language I've learned so far is Python, and I'm most excited to learn about database management. I'm very excited to be embarking on a new professional journey and hope you will join me!</p>
          <p>For the past 10 years I have taught public school music (and math!) in Manchester, NH. I am the music director of the Concert Orchestra at the Manchester Community Music School, and I also teach violin at Southern New Hampshire University.</p>
          <p>In my free time I enjoy making music with friends, cooking, and running. I live in Manchester, NH with my cat, Lizzie.</p>
        </div>
      </div>
  )
}

export default AboutMe;