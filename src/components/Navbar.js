import React from 'react';
const styles = {
  title: {
    padding: 10
  }
}
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar'>
      <h1 style={styles.title}>Paul Pinard</h1>
      <ul className='nav nav-tabs justify-content-end'>
        <li className='nav-item'>
          <a href='#aboutMe' onClick={() => handlePageChange('aboutMe')} className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}>
            About Me
          </a>
        </li>
        <li className='nav-item'>
          <a href='#contact' onClick={() => handlePageChange('contact')} className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </a>
        </li>
        <li className='nav-item'>
          <a href='#portfolio' onClick={() => handlePageChange('portfolio')} className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </li>
        <li className='nav-item'>
          <a href='#resume' onClick={() => handlePageChange('resume')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
