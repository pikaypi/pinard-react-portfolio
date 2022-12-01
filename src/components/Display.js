import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../styles/Display.css'

export default function Display() {
    const [currentPage, setCurrentPage] = useState('aboutMe');

    useEffect(() => {
        document.title = 'Paul Pinard'
    }, [])

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
        <div className='page-container'>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className='content'>
                {renderPage()}
            </div>
            <Footer />
        </div>
    )
}