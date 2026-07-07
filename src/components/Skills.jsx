import React from 'react'
import './Skills.css'
import html5 from"../assets/html5.svg"
import css from"../assets/css.svg"
import react from"../assets/react.svg"
import javascript from"../assets/javascript.svg"
import github from"../assets/github.svg"
import wordpres from"../assets/wordpress.svg"
const Skills = () => {
  return (
 <div id="skills">
    <h2 className='heading'>Skills</h2>
    <div className="line"></div>
    <div className="grid-container">
        <div className="item">
            <img src={html5} alt='html'></img>
            <h3>HTML5</h3>
        </div>
         <div className="item">
            <img src={css} alt='css'></img>
            <h3>CSS3</h3>
        </div>
         <div className="item">
            <img src={react} alt='react'></img>
            <h3>React</h3>
        </div>
         <div className="item">
            <img src={javascript} alt=''></img>
            <h3>JavaScript</h3>
        </div>
         
          <div className="item">
            <img src={wordpres} alt='github'></img>
            <h3>WordPress</h3>
        </div>
        <div className="item">
            <img src={github} alt='github'></img>
            <h3>Git & Github</h3>
        </div>
        
         
    </div>
 </div>
  )
}

export default Skills