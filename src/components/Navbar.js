import React from 'react';
import '../styles/Navbar.css'

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar'>
      <h1>Paul Pinard</h1>
      <ul className='nav nav-tabs-success justify-content-end'>
        <li className='nav-item'>
          <a href='#aboutMe' onClick={() => handlePageChange('aboutMe')} className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link text-dark'}>
            About Me
          </a>
        </li>
        {/* <li className='nav-item'>
          <a href='#contact' onClick={() => handlePageChange('contact')} className={currentPage === 'contact' ? 'nav-link active' : 'nav-link text-dark'}>
            Contact
          </a>
        </li> */}
        <li className='nav-item'>
          <a href='#portfolio' onClick={() => handlePageChange('portfolio')} className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link text-dark'}>
            Portfolio
          </a>
        </li>
        <li className='nav-item'>
          <a href='#resume' onClick={() => handlePageChange('resume')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link text-dark'}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
