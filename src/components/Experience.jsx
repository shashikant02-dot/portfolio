import React from 'react'
import './Experience.css'
import logo11 from '../assets/logo11.png'
import logo2 from '../assets/logo2.png'
const Experience = () => {
  return (
   <section className="experience-container" id="experience">

      <div className="my-experience">
        <h2>My Experiences</h2>
        <p>
          One of the most beautiful parts of every person's life, the part of
          their work life, I am very happy to have spent this part of my life
          with the people I loved, and it has made my interest in my work more
          and more
        </p>
      </div>

      <div className="cards-cont">

      
        <div className="cards">
          <div className="top-row">
            <img src={logo11} className="imgslogo" alt="company logo" />
            <span className="joining">27/JAN/2025 - 27/JUL/2025</span>
          </div>

          <div className="intern">
            <h3>
              Training - Techlive Solutions
              
            </h3>
          </div>

          <div className="desc">
            <p>Worked on developing dynamic web applications using React.</p>
            <p>Improved front-end performance using various optimization techniques.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cards">
          <div className="top-row">
            <img src={logo2} className="imgslogo" alt="company logo" />
            <span className="joining">27/JAN/2025 - 27/JUL/2025</span>
          </div>

          <div className="intern">
            <h3>
              Internship - KP IT Experts
              
            </h3>
          </div>

          <div className="desc">
            <p>Passionate Frontend Developer experienced in building dynamic and responsive web applications using React.js and modern web technologies.</p>
            <p>Learned and applied frontend skills in a real company environment through live projects.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience