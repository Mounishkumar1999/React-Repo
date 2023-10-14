import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import { Link } from "react-router-dom";
export function Skills() {
    return (
        <>
            <div className="proskillsdiv p-5 d-flex flex-wrap justify-content-center" id="/skills">
                <div className="col-lg-8 row justify-content-center text-dark text-center proeduhead   p-3">
                    <h1 className="fw-bold">TECHNICAL SKILLS</h1>
                </div>
                <div className="col-lg-8 row justify-content-center text-dark techskills  p-3 mt-5">
                    <div className="col-lg-4">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" className="container-fluid"/>
                    </div>
                    <div className="col-lg-7 text-center">
                        <h2 className="fw-bold text-center mt-5 protechskillname">HTML</h2>
                        <Link className="fw-bold btn btn-success text-center mt-5" to="/htmlproject">view my project</Link>
                        
                        
                    </div>
                </div>
                <div className="col-lg-8 row justify-content-center text-dark  techskills p-3 mt-5">
                    <div className="col-lg-4">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" className="container-fluid" />
                    </div>
                    <div className="col-lg-7 text-center">
                        <h2 className="fw-bold text-center mt-5 protechskillname">CSS</h2>
                        <Link className="fw-bold btn btn-success text-center  mt-5" to="/cssproject">view my project</Link>
                    
                    </div>
                </div>
                <div className="col-lg-8 row justify-content-center text-dark  techskills p-3 mt-5">
                    <div className="col-lg-4">
                        <img src="https://scand.com/wp-content/uploads/2021/04/JavaScript.jpg" className="container-fluid rounded-circle"/>
                    </div>
                    <div className="col-lg-7 text-center">
                        <h2 className="fw-bold text-center mt-5 protechskillname">JavaScript</h2>
                        <Link className="fw-bold btn btn-success text-center  mt-5" to="/jsprojects">view my project</Link>
                       
                    </div>
                </div>
                <div className="col-lg-8 row justify-content-center text-dark  techskills p-3 mt-5">
                    <div className="col-lg-4">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="container-fluid"/>
                    </div>
                    <div className="col-lg-7 text-center">
                        <h2 className="fw-bold text-center mt-5 protechskillname">ReactJS</h2>
                        <Link className="fw-bold btn btn-success text-center  mt-5" to="/reusablepage">view my project</Link>
                       
                    </div>
                </div>


            </div>



        
        </>
    );
}