import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import './portfolio.css';
import imagemounish from './mouni.jpg'
import { Link } from "react-router-dom";

export function About() {
    return (
        <>
            <div className="proaboutdiv" id="/about">
                <div className=" row p-5 justify-content-center text-dark fs-3">
                    <div className="d-flex row col-lg-6  p-5  ">
                        <h1 className="proabouthead fw-bold display-3">About Me</h1>
                        <p className="fw-bold">As a highly passionate and dedicated Front-End Developer based in Coimbatore, India, my objective is to utilize my expertise in Front-End and Graphic design tools to build premium and visually appealing websites. Additionally, my skills in Marketing, Retail, and Human Resource Management can be leveraged to create innovative and effective digital solutions for businesses in these industries. Ultimately, I strive to create impactful and user-friendly websites that drive business growth and success.</p>
                       <h1 className="text-center"> <a href="https://app.luminpdf.com/viewer/652a6da96de967337d0c1882" className="btn btn-danger "> download<FontAwesomeIcon icon={faDownload} /></a></h1>
                    </div>
                    <div className="d-flex row col-lg-5  p-5 ">
                    <img src={imagemounish} className="rounded-circle myimage"/>   
                    </div>
                </div>

            </div>
        </>
    );
}