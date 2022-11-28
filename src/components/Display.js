import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Display() {
    const [currentPage, setCurrentPage] = useState('aboutMe');

    const renderPage = () => {
        switch (currentPage) {
            case 'aboutMe':
                return <AboutMe />
            case 'contact':
                return <Contact />
            case 'portfolio':
                return <Portfolio />
            case 'resume':
                return <Resume />        
            default:
                break;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}