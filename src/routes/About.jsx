import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

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
          </section>
          <section className="quote">
            <p>This will be a quote of some kind</p>
          </section>
          <section className="experience">
            <h3>Experience</h3>
            <ul className="experience-details">
              <li>This is a list item</li>
            </ul>
          </section>
          <section className="skills">
            <h3>Skills</h3>
            <ul className="skills-details">
              <li>Here are some skills</li>
            </ul>
          </section>
        </section>
        <section className="about-right">
          This is a photo.
        </section>
      </div>
    </>
  );
}
