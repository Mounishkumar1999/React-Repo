import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"

export function Datefunction() {
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const StartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const calculateCompletionDate = () => {
    if (startDate) {
      const startDatenew = new Date(startDate);
      const completionDatenew = new Date(startDatenew);
      completionDatenew.setDate(startDatenew.getDate() + 90);
      const NewCompletionDate = completionDatenew.toDateString();
      setCompletionDate(NewCompletionDate);
    }
  };

  return (
    <>
    <div className="text-center">
      <h1> Find Course Completion Date </h1>
      <br/>
      <div>
        <label For="start-date">Enter Course Start Date:&nbsp;&nbsp;</label>
        <input type="date" id="start-date" onChange={StartDateChange} className="inpbox border border-dark"/>
      </div>
      <br/>
      <button onClick={calculateCompletionDate} className='bg-primary text-light'>Calculate</button>
      <br/>
      <br/> 
          <h4>Course Completion Date : <span className='text-danger'>{completionDate}</span></h4>

    </div>
    </>
  );
}






