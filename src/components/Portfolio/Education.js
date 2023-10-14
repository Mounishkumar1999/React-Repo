import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
export function Education(){
    return(
        <>
        <div className="proeducationdiv  d-flex flex-wrap justify-content-center p-5" id="/education">
           <div className="col-lg-8 row justify-content-center text-dark text-center proeduhead   p-3">
           <h1 className="fw-bold">EDUCATION DETAILS</h1>
           </div>
            <div className="col-lg-8 row justify-content-center  proedu  p-3 mt-5">
                <div className="col-lg-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWNnExl--WJivog0H63mDk34fV89Lkm-Jn1tArpFV38TGtlgzAYOOVhIY44NNqCwEeLU&usqp=CAU" className="rounded-circle container-fluid"/>
                </div>
                <div className="col-lg-7">
                    <h2 className="fw-bold">Master of Business Administration</h2>
                    <h4>Sankara college of science and commerce</h4>
                    <h5>Percentage-78%</h5>
                </div>
            </div>
            <div className="col-lg-8 row justify-content-center   proedu p-3 mt-5">
                <div className="col-lg-4">
                    <img src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" className="rounded-circle container-fluid"/>
                </div>
                <div className="col-lg-7">
                    <h2 className="fw-bold">Bachelor of Science (Mathematics)</h2>
                    <h4>PGP College of Arts and science</h4>
                    <h5>Percentage-64%</h5>
                </div>
            </div>
            <div className="col-lg-8 row justify-content-center  proedu p-3 mt-5">
                <div className="col-lg-4">
                    <img src="https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/primary-and-secondary-education.jpg" className="rounded-circle container-fluid"/>
                </div>
                <div className="col-lg-7">
                    <h2 className="fw-bold">Higher Secondary School</h2>
                    <h4>Government Higher Secondary School</h4>
                    <h5>Percentage-75%</h5>
                </div>
            </div>

        </div>
        </>
    );
}