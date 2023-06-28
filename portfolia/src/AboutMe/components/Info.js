import React from 'react';

const Info = () => {
  return (
    <div>
      <section className="section-2" id="about">
        <h2>About</h2>
        <article className="section2-content">
          <p className="section-2-text">
            I'm Aaron. I'm an aspiring web developer from Birmingham, studying coding with the University of Birmingham boot camp.
            I enjoy a new challenge and have recently decided to change my career to something more skill-driven that involves problem-solving.
          </p>
          <p className="section-2-text">
            I spend my free time learning new skills such as German, guitar, and piano. I recently dabbled in coding, which inspired me to take the plunge.
          </p>
          <div className="sec2-img-container">
            <img src="./assets/images/site.jpg" alt="" className="sec2-img" />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Info;