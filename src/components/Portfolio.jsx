import React from "react";
import "./Protfolio.css";
import vite from '../assets/vite.svg'
import image1 from'../assets/image1.png'
import image2 from'../assets/image2.png'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="heading">Portfolio</h2>
      <div className="line"></div>


      <div className="project-container">
        <div className="projects">
            <img src={image1} alt=""></img>
            <div className="card">
                <h3>ONLINE TUTOR APK</h3>
                <p>Build a Front-End E-learning website with login search and card features </p>
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
        </div>
        <div className="projects">
             <img src={image2} alt=""></img>
            <div className="card">
                <h3>ONLINE FOOD APK</h3>
                <p>Build a Front-End website with designing the user interface,order menus and
implementing the ordering process </p>
                <span>HTML</span><span>CSS</span>
            </div>
        </div>
        <div className="projects">
             <img src={image1} alt=""></img>
            <div className="card">
                <h3>ONLINE TUTOR APK</h3>
                <p>Build a Front-End E-learning website with login search and card features </p>
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
        </div>
        <div className="projects">
             <img src={image2} alt=""></img>
            <div className="card">
                <h3>ONLINE FOOD APK</h3>
                <p>Build a Front-End website with designing the user interface,order menus and
implementing the ordering process </p>
                <span>HTML</span><span>CSS</span>
            </div>
        </div>
      </div>
   
    </div>
    
  );
};

export default Portfolio;
