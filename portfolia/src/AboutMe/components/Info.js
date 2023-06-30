import React from 'react';
import "./Info.css"
import profImage from "../../Utils/Images/site.jpg"

const Info = () => {
  return (
    <div>
      <section className="section-2" id="about">
        <div className='titleDiv2'>
        <h2 className='aboutTitle'>About m</h2>
        </div>
        <article className="section2-content">
          <p className="section-2-text">
            I'm an aspiring web developer from Birmingham. Currently studying at the University of Birmingham, coding bootcamp.
            I enjoy a new challenge and have recently decided to change my career to something more skill-driven and challenging.
          </p>
          <p className="section-2-text">
            I spend my free time learning new skills such as German, guitar, and piano. I dabbled in coding during lockdown, which inspired me to start a course.
          </p>
          <div className="sec2-img-container">
            <img src={profImage} alt="" className="sec2-img" />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Info;