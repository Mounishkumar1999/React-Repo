import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceLaughBeam,faHeart } from "@fortawesome/free-solid-svg-icons"

import './Feedback.css'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export function Thankpage(){
    return(
        <>
        <div className="feedbackdiv1 container justify-content-center mt-5 p-5 text-center">
            
            <div className="feedbackicon1 d-flex justify-content-around m-5"> 
            <FontAwesomeIcon icon={faHeart} id="emoji1" />
            </div>
            <h2>Thankyou....!</h2>
            <p>we will use your feedback to improve your customer support performance</p>
        </div>

        </>
    )
}