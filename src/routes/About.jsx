import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import profilePicSmall from "../assets/profilePicSmall.jpg";
import developerResume from "../assets/developerResume.pdf";

export default function About() {
  useEffect(() => {
    document.title = "John Benton - About";
  }, []);
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
          I'm John. A developer, a designer, and a problem solver.

            <p class="about-me">
              I'm a developer with a background in music. My dream is to build
              smart websites to help people solve problems. I believe I can
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
            
              “We all want progress. But progress means getting nearer to the
              place where you want to be. And if you have taken a wrong turning,
              then to go forward does not get you any nearer. If you are on the
              wrong road, progress means doing an about-turn and walking back to
              the right road; and in that case the man who turns back soonest is
              the most progressive man.” - C.S. Lewis
            
          </section>
          <section className="experience">
            Experience
            <ul className="experience-details">
              <li>- Certified Full Stack Web Developer</li>
              <li>- Degrees in Music Education and Percussion Performance</li>
              <li>- 2 years of experience in Web Development</li>
              <li>- 5 years of experience in Finance</li>
            </ul>
          </section>
          <section className="skills">
            Skills
            <ul className="skills-details">
              <li>
                Javascript/React.JS/Node.JS/Express.JS/Angular.JS/
                RestfulAPI/PostgreSQL/Bootstrap/HTML/CSS/Project
                Management/Education/Music/Woodworker
              </li>
            </ul>
          </section>

          <a
            href={developerResume}
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
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
