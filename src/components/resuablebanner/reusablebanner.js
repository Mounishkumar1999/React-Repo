import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import './reusable.css'
export function Reusablebanner() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">

          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse fs-4" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 me-auto">
            
              <li className="p-3">
                <Link to="/helloworld" className="nav-item p-3">Helloworld</Link>
              </li>
              <li className="p-3" > <Link className="nav-item p-3" to="/congratscards" >
                Congratscards</Link>
              </li>
              <li className="p-3"> <Link className="nav-item p-3" to="/superoverleague" >
                Superoverleague</Link>
              </li>
              <li className="p-3"> <Link className="nav-item p-3" to="/socialbutton" >
                Socilabutton</Link>
              </li>
              <li className="p-3" > <Link className="nav-item p-3" to="/notification" >
                Notification</Link>
              </li>
              <li className="p-3" > <Link to="/login" className="nav-item p-3">
                Login</Link>
              </li>
              <li className="nav-item dropdown p-1">
             
             <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <span id="span1">others</span>
             </a>
             <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
               <li className="p-3 dropdown-item" > <Link  to="/technologycards" className="nav-item p-3" activeclass="active">
                 Technologycards</Link>
               </li>
               <li className="p-3 dropdown-item" > <Link to="/feedback" className="nav-item p-3">
                 Feedbackpage</Link>
               </li>
               <li className="p-3 dropdown-item" > <Link to="/hooksassignment" className="nav-item p-3">
                 Hooksassignment</Link>
               </li>
               <li className="p-3 dropdown-item" > <Link to="/fruit" className="nav-item p-3">
                 Fruit</Link>
               </li>
               <li className="p-3 dropdown-item" > <Link to="/date" className="nav-item p-3">
                 Datefunction</Link>
               </li>
               <li className="p-3 dropdown-item" > <Link to="/jsonassignment" className="nav-item p-3">
                 Jsonassignment</Link>
               </li>
               
             </ul>
           </li>
              <li className="p-3">
                <Link to="/" className="nav-item p-3 ms-5">Back<FontAwesomeIcon icon={faBackward} /></Link>
              </li>





            </ul>

          </div>
        </div>
      </nav>
        




            



    </>
  );
}