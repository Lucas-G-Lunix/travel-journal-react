import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img className="card--img" src={`./images/${props.item.image}`} alt={`card-${props.item.id}`}/>
            <div className="card--content">
                <img src="./images/map-point.svg" alt="map point"/>
                <span>{props.item.location}</span>
                <a href="https://www.google.com/maps" target="_blank">View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <h2>{props.item.startDate} - {props.item.endDate}</h2>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}