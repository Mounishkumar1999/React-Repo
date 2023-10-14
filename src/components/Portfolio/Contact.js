import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import mysecimage from './mounishimg.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export function Contact() {
    return (
        <>
            <div className="procontactdiv p-5" id="/contact">
                <div className=" ">
                    <div className="row promapdiv">
                    <div className="col-lg-12 promap ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15660.070011150228!2d77.99357234496516!3d11.112073280456896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd4b04c2efbb1%3A0x35c4d71f6b52e69f!2sVelur%2C%20Tamil%20Nadu%20638182!5e0!3m2!1sen!2sin!4v1697168166685!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" className="mt-5 " referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                    </div>
                    </div>
                   
                    <div className=" container row text-light mx-auto">
                        <div className="row  profooterdiv ">
                            <div className="col-lg-2 mt-5">
                                <img src={mysecimage} className="container-fluid rounded-circle" />
                            </div>
                            <div className="col-lg-5 mt-2 p-5 text-center">
                                <h1>Address</h1>
                                <p>80/17 Northstreet,<br />Pothanur(po),<br />Namakkal(dt),<br />Tamilnadu</p>
                            </div>
                            <div className="col-lg-3 mt-2 p-5">
                                <h1>Contact</h1>
                                <a href="https://github.com/Mounishkumar1999" target="_blank"><FontAwesomeIcon icon={faGithub} className="fs-2 me-3  proemojilink" /></a>
                                <a href="https://www.linkedin.com/in/mounishkumar/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fs-2 me-3 proemojilink" /></a>
                                <a href="tel:6379754790"><FontAwesomeIcon icon={faPhone}  className="fs-2 me-3 proemojilink"/></a>
                                <a href="mailto:mounishkumar0311@gmail.com"><FontAwesomeIcon icon={faEnvelope}  className="fs-2 me- proemojilink"/></a>

                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}