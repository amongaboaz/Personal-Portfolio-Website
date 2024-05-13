import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import  about_profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div  id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        
            <img src={about_profile} alt="" />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over 6 months of experience</p>
                <p>My passion for frontend development is not only
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"90%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{width:"40%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p>
                    <hr style={{width:"40%"}} />
                </div>
                <div className="about-skill">
                    <p>Bootstrap</p>
                    <hr style={{width:"90%"}} />
                </div>               
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>12+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
