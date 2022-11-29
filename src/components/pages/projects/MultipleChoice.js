import React from "react";
import image from '../../../images/multiple-choice.png';

export default function MultipleChoice() {
    return (
        <div>
            <img src={image} alt={`A screenshot of the Multiple Choice Quiz homepage`} height={100}/>
            <h2>Multiiple Choice Quiz</h2>
            <p>This is the description of the Multiple Choice Quiz application</p>
        </div>
    )
}