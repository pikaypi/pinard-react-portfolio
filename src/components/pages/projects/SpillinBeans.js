import React from "react";
import image from '../../../images/spillin-beans.png';

export default function SpillinBeans() {
    return (
        <div>
            <img src={image} alt={`A screenshot of the Spillin' Beans homepage`} height={100}/>
            <h2>Spillin' Beans</h2>
            <p>This is the description of the Spillin' Beans application</p>
        </div>
    )
}