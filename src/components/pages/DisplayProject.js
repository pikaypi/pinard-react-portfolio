import React from "react";

export default function DisplayProject(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
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