import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck,faBell} from "@fortawesome/free-regular-svg-icons"
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons"
 export function Notification(){
    return(
        <>
            <div className="col-lg-5 mx-auto" id="/notification">
                <h1 className="text-center">Notification</h1>
                <div className="fs-4 bg-primary p-5 m-5 rounded text-white"><p><FontAwesomeIcon icon={faCircleCheck} /> &nbsp;&nbsp; Information Message</p></div>
                <div className="fs-4 bg-success p-5 m-5 rounded text-white"><p><FontAwesomeIcon icon={faCircleCheck} /> &nbsp;&nbsp; Success Message</p></div>
                <div className="fs-4 bg-warning p-5 m-5 rounded text-white"><p><FontAwesomeIcon icon={faBell} /> &nbsp;&nbsp; Warning  Message</p></div>
                <div className="fs-4 bg-danger p-5 m-5 rounded text-white"><p><FontAwesomeIcon icon={faCircleExclamation} />&nbsp;&nbsp;Error Message</p></div>
                
            </div>

        </>
    );
}