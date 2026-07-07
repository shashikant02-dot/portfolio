import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div id="education">
      <h2 className="heading"> Education</h2>
      <div className="line"></div>
      <div className="edtech">
        <div className="edfirst">
             <div className="goal"></div>
          <div className="year">2023-2025</div>
          <h3 className="degree">Master of Computer Applications </h3>
          <p className="college">Govt PG College Una   (HPTU)</p>
         
        </div>
        <div className="edsecound">
             <div className="goal"></div>
          <div className="year">2020-2023</div>
          <h3 className="degree">Bechlor of Computer Applications </h3>
          <p className="college">KC Group of Institution , Pandoga   (HPU)</p>
          
        </div>
        <div className="linear"></div>
      </div>
    </div>
  );
};

export default Education;
