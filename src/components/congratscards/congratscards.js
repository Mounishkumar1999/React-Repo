import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './congratscards.css';
import image1 from "./congrats-card-bg.png";
import image2 from "./congrats-card-profile-img.png";
import image3 from "./congrats-card-watch-img.png";
export function Congratscards() {
    return (
        <>
            <div className="cardtask">
                <h1 className="fs-1 title text-center">Congratulation</h1>
                <div class="main1 bg-info text-center col-lg-4 mx-auto p-5">
                    <img src={image2} class="image2" alt="..." />
                    <h5 class="title1 fs-3">Kiran V</h5>
                    <p class="text">Vishnu Institution of Computer Education and Technology Bhimavaram</p>
                    <img src={image3} class="image3" alt="..." />
                </div>
            </div>

        </>
    );
}