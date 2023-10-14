import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import scr1 from './Screenshot 2023-10-07 211853.png'
import scr2 from './Screenshot 2023-10-12 211408.png'
import scr3 from './Screenshot 2023-10-12 211425.png'
import scr4 from './Screenshot 2023-10-12 211450.png'
import scr5 from './Screenshot 2023-10-12 232313.png'
import scr6 from './Screenshot 2023-10-12 232339.png'
export function Htmlprojects() {
    return (
        <>
            <div className="bg-dark">
                <div className="row mt-5">
                    <div className="col-lg-3 m-5">
                        <img src={scr1} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr2} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr3} className="container-fluid"/>
                    </div>
                </div>
                <div  className="row mt-5">
                    <div className="col-lg-3 m-5">
                        <img src={scr4} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr5} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr6} className="container-fluid"/>
                    </div>

                </div>
            </div>
        </>
    );
}