import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import './fruit.css'
export function Fruit(){
    const[count,setCount]=useState(0)
    const[banana,setBanana]=useState(0)

    return(
        <>
             <div className="container-fluid p-5 backdiv" id="fruimg">
                <div className="container p-5 bg-white fruitdiv">
                    <div className="d-grid">
                        <div className="row">
                            <h1 className="text-center">Mounish ate <span className="frug">{count}</span>  Mangos and <span className="frug">{banana} </span>Bananas</h1>
                            <div className="col-md-12 col-lg-6 text-center mb-5 ">
                                <img src="https://media.istockphoto.com/id/168370138/photo/mango.jpg?s=612x612&w=0&k=20&c=ENq2BrUV8dNH2rth_ZYBBtS9RWDwCbI25SfulxirmnQ=" className=" fruimg" />
                                <button className="btn bg-primary text-light m-3" onClick={()=>{setCount(count+1)}}>Add Mango</button>
                            </div>
                            <div className="col-md-12 col-lg-6 text-center mt-5 ">
                              <img src="https://media.istockphoto.com/id/1291262112/photo/banana.webp?b=1&s=170667a&w=0&k=20&c=pPSsFoR1CX7oHJrr-bZPSoFIBO8PPf4SQDg3IbF-wcg=" className="fruimg "/>
                              <button className="btn bg-primary text-light mb-5" onClick={()=>{setBanana(banana+1)}}>Add Banana</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}