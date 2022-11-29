import React from "react";
import image from '../../../images/password-generator.png';

export default function PasswordGenerator() {
    return (
        <div>
            <img src={image} alt={`A screenshot of the Password Generator homepage`} height={100}/>
            <h2>Password Generator</h2>
            <p>This is the description of the Password Generator application</p>
        </div>
    )
}