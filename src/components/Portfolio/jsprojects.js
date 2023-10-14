import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import scr13 from './Screenshot 2023-10-12 235356.png'
import scr14 from './Screenshot 2023-10-12 235639.png'
import scr15 from './Screenshot 2023-10-12 235420.png'
import scr4 from './Screenshot 2023-10-12 211450.png'
import scr5 from './Screenshot 2023-10-12 232313.png'
import scr6 from './Screenshot 2023-10-12 232339.png'
export function Jsprojects() {
    return (
        <>
            <div className="bg-dark">
                <div className="mx-auto">
                    <div className="col-lg-8 m-5">
                        <img src={scr13} className="container-fluid"/>
                    </div>
                    <div className="col-lg-8 m-5">
                        <img src={scr14} className="container-fluid"/>
                    </div>
                    <div className="col-lg-8 m-5">
                        <img src={scr15} className="container-fluid"/>
                    </div>
                </div>
            </div>
        </>
    );
}