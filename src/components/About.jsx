import React from 'react'
import aboutimage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
        <div className='about-image'>
            <img src={aboutimage}/>
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>At gym. we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.
                <br></br>
            #BeBetterEveryDay.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About