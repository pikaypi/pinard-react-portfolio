import React from "react";
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/pikaypi" target={"_blank"} rel="noreferrer">
                <img src={github} alt="The GitHub logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/paul-pinard-410b5836/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="The LinkedIn logo"></img>
            </a>
            <a href="https://www.facebook.com/pkpinard" target="_blank" rel="noreferrer">
                <img src={facebook} alt="The Facebook logo"></img>
            </a>
        </div>
    )
}