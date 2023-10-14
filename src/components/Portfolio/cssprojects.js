import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import scr12 from './Screenshot 2023-10-12 232507.png'
import scr7 from './Screenshot 2023-10-12 232543.png'
import scr8 from './Screenshot 2023-10-12 232543.png'
import scr9 from './Screenshot 2023-10-12 232609.png'
import scr10 from './Screenshot 2023-10-12 232636.png'
import scr11 from './Screenshot 2023-10-12 232651.png'
export function Cssprojects() {
    return (
        <>
            <div className="bg-dark">
                <div className="row mt-5">
                    <div className="col-lg-3 m-5">
                        <img src={scr12} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr7} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr8} className="container-fluid"/>
                    </div>
                </div>
                <div  className="row mt-5">
                    <div className="col-lg-3 m-5">
                        <img src={scr9} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr10} className="container-fluid"/>
                    </div>
                    <div className="col-lg-3 m-5">
                        <img src={scr11} className="container-fluid"/>
                    </div>

                </div>
            </div>
        </>
    );
}