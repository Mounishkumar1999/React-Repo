import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import { useTypewriter } from "react-simple-typewriter";
export function Portfoliohome(){
    const[Name]=useTypewriter({
        words:['Front-End Developer','UI/UX Designer','Web Developer'],
        backSpeed:200,
        typeSpeed:200,
        loop:true,
    })
    return(
        <>
        <div className=" container-fluid prohomediv p-5 " id="/">
               
                    <div className="prohomecontent  justify-content-center text-center text-dark ">
                        <h2 className="display-6 fw-bold fst-italic"> I'm</h2>
                       
                        <h1 className="display-5 fw-bold fw-italic promyname fst-italic">MOUNISHKUMAR . T</h1>
                        <br/>
                        <h2 className="display-6 fw-bold  promyname1 fst-italic">{Name}</h2>
                    </div>
               
            </div>
        </>
    );
}
