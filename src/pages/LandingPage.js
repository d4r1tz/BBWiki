import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Axios from "axios";
import Card from "../components/Card";

export var getCharId = ""

export default function LandingPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('https://www.breakingbadapi.com/api/characters/?category=Breaking+Bad')
        .then(res => {
            console.log(res.data);
            setData(res.data)
        })
    },[])

    return(
        <main>
            <h1 style={{paddingTop:"20px",textAlign:"center"}}>BREAKING BAD CHARACTERS</h1>
            <div style={{paddingTop:"20px",paddingBottom:"50px",paddingRight:"30px",display:"flex",flexWrap:"wrap",align:"center"}}>
                {data.map((data,index) => {
                    return(
                        <Link to={{pathname:"/detail"}} onClick={() => {getCharId = data.char_id}} style={{textDecoration:"none"}}>
                            <div className="card">
                                <figure>
                                    <h1><img style={{paddingTop:"10px",paddingLeft:"10px",width:"130px",height:"fit-content"}} src={data.img} alt={data.name}/></h1>
                                </figure>
    
                                <div className="card-info">
                                    <h3 style={{color:"black"}}>{data.name}</h3>
                                    <p style={{color:"black"}}>{data.category}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}