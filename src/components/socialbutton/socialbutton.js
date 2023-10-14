import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './socialbutton.css'
 export function Socialbutton(){
    return(
        <>
            <div className="social p-5 text-center ">
                <h1 className=" text-light text-center mt-5 socialtitle">Social Button</h1>
                <div className="pt-5">
                    <button className="btn btn-warning m-1">like</button>
                    <button className="btn btn-light m-1">comment</button>
                    <button className="btn btn-primary m-1">share</button>
                </div>
            </div>
        </>
    );

}