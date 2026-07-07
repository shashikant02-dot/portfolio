import React from "react";
import "./Footer.css";
import resume from "../assets/resume.pdf";
const Footer = () => {
  return (
    <div className="footers" id="Footer">
      <div className="footer-data">
        <h2>I Am Available For Remote Jobs!</h2>
      </div>
      <div className="btns">
        <a href="tel:7807306887" className="hire-btn">
          Hire Me Now
        </a>
        <a href={resume} download className="btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
