import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faRightLong } from "@fortawesome/free-solid-svg-icons"
import './login.css';
export function Login() {
    return (
        <>
            <div className="container-fluid p-5 backdiv" id="bgimg">
                <div className="container p-5 bg-white frontdiv">
                    <div className="d-grid">
                        <div className="row">
                            <div className="col-md-12 col-lg-5 text-center imagediv">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsPvDAZNOzilBpbRXS3p3kqhDpUuefGl9RA&usqp=CAU" className="rounded-circle w-50 mt-4" />
                            </div>
                            <div className="col-md-12 col-lg-4 mt-4 text-center">
                                <h1>Login page</h1>
                                <div className="row mt-5 " id="inputuser">
                                    <p className="col-1 mt-2"><FontAwesomeIcon icon={faUser} /></p>
                                    <input type="text" placeholder="Enter a Name" className="col-6" />
                                </div>
                                <div className="row mt-5" id="inputuser">
                                    <p className="col-1"><FontAwesomeIcon icon={faLock} className="mt-1" /></p>
                                    <input type="password" placeholder="Enter a password" className="col-6 bg-" />
                                </div>
                                <button className="btn btn-success col-12 p-2 mt-5 buto">Login</button>
                                <p className="mt-4">Forget <a href="#" className="text-success">Username</a> / <a href="#" className="text-success">password</a></p>
                                <p className="mt-4"><a href="#" className="text-success">Create your Account<FontAwesomeIcon icon={faRightLong} /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
