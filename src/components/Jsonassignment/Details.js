import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { useParams } from "react-router-dom";
export function Details() {
    const [Details, setDetail] = useState([])
    var {id}=useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(res => res.json())
            .then(viewdetail => setDetail(viewdetail))
    })
    return(
        <>
            <div className="container-fluid row">
                <div className="col-lg-6 ">
                    <img src={Details.image} className="container-fluid"/>
                </div>
                <div className="col-lg-6">
                    <h1> Product Title: {Details.title}</h1>
                    <br/>
                    <h2> Category: {Details.category}</h2>
                    <br/>
                    <h2> Description: {Details.description}</h2>
                    <br/>
                    <h2> price : ${Details.price}</h2><br/>
                </div>
            </div>
        </>
    );
}