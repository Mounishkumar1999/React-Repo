import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons"
import './Feedback.css'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export function Feedback(){
    return(
        <>
        <div className="feedbackdiv container justify-content-center mt-5 p-5">
            <h3>How satisfied are you with our customer support perfomance</h3>
            <div className="feedbackicon d-flex justify-content-around m-5"> 
            <Link to="/thankpage"><FontAwesomeIcon icon={faFaceSadTear} id="emoji" className="me-2"/></Link>
            <Link to="/thankpage"><FontAwesomeIcon icon={faFaceSmileBeam} id="emoji" className="me-2"/></Link>
            <Link to="/thankpage"><FontAwesomeIcon icon={faFaceLaughBeam} id="emoji" className="me-2"/></Link>
            </div>
        </div>

        </>
    )
}