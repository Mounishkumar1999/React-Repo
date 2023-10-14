import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
export function Hooksassignment(){
    // const[variable,setvariable]=useState(ini-value)
    const[count,setCount]=useState(0)
    return(
        <>
        <div className="text-center">
        <h1>{count}</h1>
        <button className="btn bg-primary text-light m-5" onClick={()=>{setCount(count+1)}}>Add</button>
        <button className="btn bg-primary text-light m-5" onClick={()=>{setCount(count-1)}}>Sub</button>
        <button className="btn bg-primary text-light m-5" onClick={()=>{setCount(count*0)}}>Reaset</button>
        </div>
        
        </>
    );
}