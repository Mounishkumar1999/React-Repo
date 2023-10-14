import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import certificate1 from './Coursera INTRODUCTION FRONTEND DEVELOPMENT certificate_page-0001.jpg'
import certificate2 from './Coursera HTML and CSS Depth_page-0001.jpg'
import certificate3 from './Coursera programming with javascript_page-0001.jpg'
export function Certification() {
   return (
      <>
         <div className="procertificationdiv d-flex flex-wrap justify-content-center p-5" id="/certification">
            <div className="col-lg-12 row justify-content-center text-dark  text-center proeduhead ">
               <h1 className="fw-bold"> CERTIFICATION</h1>
            </div>
            <div className="col-lg-3 row justify-content-center text-dark  procer  m-5">
               <div className="col-12">
                  <img src={certificate1} className="container-fluid procerimage" />
               </div>
               <div className="col-12 bg-dark text-light ">
                  <h2>Intoduction to FrontEnd Development</h2>
                  <h3 className="">In Coursera</h3>
                  <button className="btn btn-info">click</button>
               </div>
            </div>

            <div className="col-lg-3 row justify-content-center text-dark   procer  m-5">
               <div className="col-12">
                  <img src={certificate2} className="container-fluid procerimage" />
               </div>
               <div className="col-12 bg-dark text-light ">
                  <h2>HTML and CSS Depth</h2>
                  <h3>In Coursera</h3>
                  <button className="btn btn-info">click</button>
               </div>
            </div>
            <div className="col-lg-3 row justify-content-center text-dark   procer  m-5">
               <div className="col-12">
                  <img src={certificate3} className="container-fluid procerimage" />
               </div>
               <div className="col-12 bg-dark text-light ">
                  <h2>Programming with JavaScript</h2>
                  <h3>In Coursera</h3>
                  <button className="btn btn-info">click</button>
               </div>
            </div>

         </div>
      </>
   );
}