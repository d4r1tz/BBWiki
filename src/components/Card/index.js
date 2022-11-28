import React from "react";
import "./cardCSS.css";

export default function index({ data }) {
    return (
    <div className="card">{data ? (
        <>
            <figure>
                <img style={{paddingTop:"10px",paddingLeft:"10px",width:"130px",height:"fit-content"}} src={data.img} alt={data.name}/>
            </figure>
    
            <div className="card-info">
                <h3 style={{color:"black"}}>{data.name}</h3>
                <p style={{color:"black"}}>{data.category}</p>
            </div>
        </>) : (<p>Loading...</p>)}
    </div>
    );
}