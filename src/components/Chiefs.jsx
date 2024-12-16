// import React from "react";
import "./Chiefs.css"

function Chiefs(props){


    return (
    <div className="chief-card">
        <img src={props.image} className="chief-image"></img>
            <strong>{props.name}</strong><br></br>
            {props.post}
    </div>
    )
}

export default Chiefs;