import React from "react";
import "./Main.css";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Portfolio from "./Portfolio";
import img from "../assets/img.jpeg"
import Experience from "./Experience";

const Main = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="profile">
          <img src={img} alt=""></img>
          <h2>Shashi Kant</h2>
          <p>Frontend Developer</p>
        </div>

        <div className="contact">
< div className="email">
    <h3 className="label">Email</h3>
   <a href="mailto:shashikatwal02@gmail.com" className="value">shashikatwal02@gmail.com</a>
</div>
<div className="phone">
    <h3 className="label">Phone</h3>
    <a href="tel:7807306887" className="value">7807306887</a>

</div>
<div className="location">
    <h3 className="label">Location</h3>
    <p className="value">Mohali,Chandigarh</p>
</div>
        </div>
         <div className="social-icons">
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
        
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
        
          <a href="https://telegram.org" target="_blank">
            <FaTelegram />
          </a>
        
          <a href="https://twitter.com" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="main-content">
        <div id="navigation">
          <nav>
            <a href="#about" className="active">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
          </nav>
        </div>
        <About/>
        <Skills/>
        <Education/>
        <Portfolio/>
        <Experience/>
       


      

      </div>
    </div>
  );
};

export default Main;
