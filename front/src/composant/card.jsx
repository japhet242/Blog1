import { Link } from "react-router-dom";
import { Button } from "./button";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

export function Card ({element,onSetId}) {

    return (
    <div className="card" style={{width: "40rem", margin:"5px"}}>
       
                <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.body.split("\n\n")[0].substring(0,223)} ...</p>
            <Link to={`/blog/${element.id}`}>
                <Button children="voir plus"/>
            </Link>
        
            <Link to={`/blog`}>
                <Button children="delete" color="danger" onClick={()=>{
                    onSetId(element.id)
                }}/> 
            </Link>
        </div>
    </div>
    )
}