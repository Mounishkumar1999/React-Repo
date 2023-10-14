import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Link as ScrollLink} from 'react-scroll/modules'
import './portfolio.css';

export function Home() {
    return (
        <>
            <div className=" container homediv">
                <nav class="navbar navbar-expand-lg fixed-top homenavdiv">
                
                        <button class="navbar-toggler bg-dark text-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  pronavul gap-5 ms-2 fw-bold">
                                <li class="nav-item fs-4" >
                                    <ScrollLink activeClass="active" to="/" spy={true} smooth={true} offset={-50} duration={-50} id="pronavitem">Home</ScrollLink>
                                </li>
                                <li class="nav-item fs-4">
                                <ScrollLink  activeClass="active" to="/about" spy={true} smooth={true} offset={-50} duration={-50} id="pronavitem">About</ScrollLink>
                                </li>
                                <li class="nav-item fs-4">
                                <ScrollLink  activeClass="active" to="/certification" spy={true} smooth={true} offset={-50} duration={-50} id="pronavitem">Certification</ScrollLink>
                                </li>
                                <li class="nav-item fs-4">
                                <ScrollLink  activeClass="active" to="/education" spy={true} smooth={true} offset={-50} duration={-50} id="pronavitem">Education</ScrollLink>
                                </li>
                                <li class="nav-item fs-4">
                                <ScrollLink  activeClass="active" to="/skills" spy={true} smooth={true} offset={-50} duration={-50} id="pronavitem">Skills</ScrollLink>
                                </li>
                                
                                <li class="nav-item fs-4">
                                <ScrollLink  activeClass="active" to="/contact" spy={true} smooth={true} offset={-50} duration={-50} id="pronavitem">Contact</ScrollLink>
                                </li>


                            </ul>
                        </div>
                
                </nav>
                {/* <div>
                    <div className="text-center justify-content-center text-dark prohomecontent">
                        <h2> I am</h2>
                        <br/>
                        <h1 className="display-2 fw-bold fw-italic promyname fst-italic">MOUNISHKUMAR . T</h1>
                        <br/>
                        <h2 className="display-4 fw-bold  promyname1 fst-italic">FrontEnd-Developer</h2>
                    </div>
                </div> */}
            </div>
        </>
    );
}