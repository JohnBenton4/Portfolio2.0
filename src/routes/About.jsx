import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import profilePicSmall from "../assets/profilePicSmall.jpg";
import developerResume from "../assets/developerResume.pdf";

export default function About() {
  return (
    <>
      <Sidebar />
      <div className="container-about">
        <section className="about-left">
          <div className="about-title">
            <h1>About</h1>
          </div>
          <br></br>
          <section className="hello">
            <h3>I'm John. A developer, a designer, and a problem solver.</h3>

            <p class="about-me">
              I'm a developer with a background in music. My dream is to build
              beautiful websites to help people solve problems. I believe I can
              have a positive global impact, and I am extremely excited for the
              opportunities that await me in the near future.
              <br />
              <br />
              If I'm not behind the computer, you can find me spending quality
              time with my family, building a piece of bespoke furniture, or
              traveling the world to experience delicious food and breathtaking
              scenery.
            </p>
          </section>
          <section className="quote">
            <p>"This will be a quote of some kind"</p>
          </section>
          <section className="experience">
            <h3>Experience</h3>
            <ul className="experience-details">
              <li>- Degrees in Music Education and Percussion Performance</li>
              <li>- 2 years of experience in Web Development</li>
              <li>- 5 years of experience in Finance</li>
            </ul>
          </section>
          <section className="skills">
            <h3>Skills</h3>
            <ul className="skills-details">
              <li>
                Javascript/React.JS/Node.JS/Express.JS/Angular.JS/
                RestfulAPI/PostgreSQL/Bootstrap/HTML/CSS/Project
                Management/Education/Music/Woodworker
              </li>
            </ul>
          </section>

          <a href={developerResume} target="_blank" rel="noreferrer" className="resume-button">
          Resume
          </a>
        </section>
        <section className="about-right">
          <img src={profilePicSmall} alt="profilePicSmall" />
        </section>
      </div>
    </>
  );
}
