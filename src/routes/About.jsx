import React from "react";
// import { useNavigate } from "react-router";

const About = () => {
  // const navigate = useNavigate();
  return (
    <div className="container">
      {/* <button className="btn" onClick={() => navigate(-1)}>
        Go Back{" "}
      </button> */}
      <section className="about-title">
        <h1>About</h1>
      </section>
      <section className="hello">
        <h3>I'm John. A developer, a designer, and a problem solver.</h3>
      </section>
      <section className="experience">
        <h4>Experience</h4>
      </section>
      <br></br>
      <ul className="experience-details">
        <li></li>
      </ul>
      <section className="skills">
        <h4>Skills</h4>
      </section>
      <br></br>
      <ul className="skills-details">
        <li></li>
      </ul>
    </div>
  );
};



export default About;
