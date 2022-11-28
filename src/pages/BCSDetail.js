import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "../components/Card";
import { getCharId } from "./BCS";

export default function BCSDetail() {

    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('https://www.breakingbadapi.com/api/characters/'+ getCharId)
        .then(res => {
            console.log(res.data);
            setData(res.data)
        })
    },[])

    return(
        <main>
            <h1 style={{paddingTop:"20px",textAlign:"center"}}>DETAILS</h1>
            <div style={{paddingTop:"20px",
                         paddingBottom:"50px",paddingLeft:"5px",
                         textAlign:"center"}}>
                {data.map((data,index) => {
                    return(
                        <div>
                            <figure>
                                <h1><img style={{paddingTop:"10px",width:"130px",height:"fit-content"}} src={data.img} alt={data.name}/></h1>
                            </figure>
    
                            <div style={{paddingTop:"20px",paddingBottom:"50px",paddingRight:"10px"}}>
                                <h3 style={{color:"black"}}>Name : </h3> 
                                    <p style={{color:"blue", fontWeight:"bold", paddingBottom:"10px"}}>{data.name}</p>
                                <h3 style={{color:"black"}}>Nickname : </h3> 
                                    <p style={{color:"blue", fontWeight:"bold", paddingBottom:"10px"}}>{data.nickname}</p>
                                <h3 style={{color:"black"}}>Birth Date : </h3> 
                                    <p style={{color:"blue", fontWeight:"bold", paddingBottom:"10px"}}>{data.birthday}</p>
                                <h3 style={{color:"black"}}>Occupation : </h3> 
                                    <p style={{color:"blue", fontWeight:"bold"}}>{data.occupation[0]}</p>
                                    <p style={{color:"blue", fontWeight:"bold"}}>{data.occupation[1]}</p>
                                    <p style={{color:"blue", fontWeight:"bold", paddingBottom:"10px"}}>{data.occupation[2]}</p>
                                <h3 style={{color:"black"}}>Status : </h3> 
                                    <p style={{color:"blue", fontWeight:"bold", paddingBottom:"10px"}}>{data.status}</p>
                                <h3 style={{color:"black"}}>Portrayed by : </h3> 
                                    <p style={{color:"blue", fontWeight:"bold", paddingBottom:"10px"}}>{data.portrayed}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
