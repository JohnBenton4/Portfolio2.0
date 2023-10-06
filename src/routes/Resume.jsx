import React, { useEffect } from "react";
import css from "../assets/css.png";
import git from "../assets/git.jpeg";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import vscode from "../assets/vscode.png";
import Sidebar from "../components/sidebar/Sidebar";

export default function Resume() {
  useEffect(() => {
    document.title = "John Benton - Resume";
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container-resume">
        <section className="resume-title">
          <h1>Resume</h1>
        </section>
        <br></br>
        <div className="top">
          <section className="left-top">
            <h2 className="underline">EDUCATION</h2>
            <section className="resume-credentials">
              <ul>
                <h3>Certificate in Software Engineering</h3>
                <p>04/2022-10/2022 | Atlanta, GA</p>
                <p>DigitalCrafts</p>
              </ul>
              <ul>
                <h3>Master of Music in Percussion Performance</h3>
                <p>08/2010-05/2012 | Athens, GA</p>
                <p>The University of Georgia</p>
              </ul>

              <ul>
                <h3>Bachelor of Music in Music Education</h3>
                <p>08/2006-05/2010 | Birmingham, AL</p>
                <p>Samford University</p>
              </ul>
            </section>
          </section>
          <section className="right-top">
            <h2 className="underline">DEVELOPMENT SKILLS</h2>
            <div className="dev-skills">
              <img className="skillsimg" src={css} alt="css" />
              <img className="skillsimg" src={git} alt="git" />
              <img className="skillsimg" src={html} alt="html" />
              <img className="skillsimg" src={javascript} alt="javascript" />
              <br />
              <img className="skillsimg" src={nodejs} alt="nodejs" />
              <img className="skillsimg" src={react} alt="react" />
              <img className="skillsimg" src={vscode} alt="vscode" />
            </div>
          </section>
        </div>
        <hr />
        <section className="project">
          <h2 className="underline">PROJECTS</h2>
          <div className="projects">
            <a href="/introvert_empowerment/introvert-empowerment.html">
              <h3>Introvert Empowerment</h3>
            </a>
            <p>10/2022</p>
            <p>
              DigitalCrafts full-stack group project for introverts that are
              working toward becoming more outgoing.
            </p>
          </div>
          <div className="projects">
            <a href="/date_idea_app/date-idea-app.html">
              <h3>Date Idea App</h3>
            </a>
            <p>09/2022</p>
            <p>
              DigitalCrafts individual back-end project designed to assist
              people who want to plan a date with their significant other or and
              group activity with friends.
            </p>
          </div>
          <div className="projects">
            <a href="/mood_game/mood-game.html">
              <h3>Mood Game</h3>
            </a>
            <p>06/2022</p>
            <p>
              DigitalCrafts group front-end project helping people feel better
              through jokes and trivia.
            </p>
          </div>
        </section>
        <hr />
        <section className="career-history">
          <h2 className="underline">CAREER HISTORY</h2>
          <div className="career">
            <h3>Operations Lead/Tech Lead</h3>
            <p> 2023 | Alpharetta, GA</p>
            <p>N-Hance</p>
          </div>
          <div className="career">
            <h3>Senior Financial Analyst</h3>
            <p>2017-2023 | Duluth, GA</p>
            <p>Primerica</p>
          </div>
          <div className="career">
            <h3>Director of Percussion Programs</h3>
            <p>2014-2017 | Atlanta, GA</p>
            <p>The Westminster Schools</p>
          </div>
        </section>
      </div>
    </>
  );
}
