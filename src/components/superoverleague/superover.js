import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './superover.css';
// import image1 from "./rcb-img.png"
// import image2 from "./csk-img.png"

export function Superoverleague() {
    return (
        <>

            <div className=" mx-auto p-5 super-over bg-dark">
                <h1 className="text-light text-center">Super Over League</h1>
                <div className="container row justify-content-center">
                    <img src=" https://assets.ccbp.in/frontend/react-js/rcb-img.png" className="col-lg-4 col-12" />
                    <img src=" https://assets.ccbp.in/frontend/react-js/csk-img.png"  className="col-lg-4 col-12"/>
                </div>

            </div>
        </>
    );
}