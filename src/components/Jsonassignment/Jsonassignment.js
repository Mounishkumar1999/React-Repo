import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Jsonassignment() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(viewdata => setData(viewdata))
    })
    return (
        <>
            <h1>view My data</h1>
            <div className="container-fluid row justify-content-center">
                {
                    data.map((value, index) => (
                        <>
                            <div class="card col-lg-3 bg-info m-3 text-center p-3" >
                                <img src={value.image} class="card-img-top mx-auto w-50 " alt="..."/>
                                    <div class="card-body">
                                    <Link to={`/details/${value.id}`}><h5 class="card-title">{value.title}</h5></Link>
                                    <Link to={`/details/${value.id}`} ><p class="card-text"> price $: {value.price}</p></Link>
                                    <StarRatings rating={value.rating.rate} starDimension="30px" starSpacing="2px" starRatedColor="yellow"/>
                                    <br/>
                                        <Link to={`/details/${value.id}`} class="btn btn-primary">Go</Link>
                                    </div>
                            </div>
                        </>

                    ))
                }

            </div>

        </>
    );
}