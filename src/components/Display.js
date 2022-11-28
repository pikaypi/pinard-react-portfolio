import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Display() {
    const [currentPage, setCurrentPage] = useState('aboutMe');

    const renderPage = () => {
        if (currentPage === 'aboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'contact') {
            return <Contact />;
        }
        if (currentPage === 'portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'resume') {
            return <Resume />;
        }            
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}