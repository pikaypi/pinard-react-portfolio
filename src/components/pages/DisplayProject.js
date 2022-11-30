import React from "react";
import '../../styles/DisplayProject.css'

export default function DisplayProject(props) {
    return (
        <div className="card display-project">
            <a href={props.url} target={"_blank"} rel="noreferrer">
                <img src={props.image} alt={`A screenshot of the ${props.name} homepage`} className={'card-img-top'} />
            </a>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}