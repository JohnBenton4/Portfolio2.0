import React from "react";
import css from "../assets/css.png";
import git from "../assets/git.jpeg";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import vscode from "../assets/vscode.png";

export default function Resume() {
  return (
    <>
      <div className="container-resume">
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
            <div className="skills">
              <img src={css} alt="css" />
              <img src={git} alt="git" />
              <img src={html} alt="html" />
              <img src={javascript} alt="javascript" />
              <br />
              <img src={nodejs} alt="nodejs" />
              <img src={react} alt="react" />
              <img src={vscode} alt="vscode" />
            </div>
          </section>
        </div>
        <hr />
        <div className="bottom">
          <div>
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
                people who want to plan a date with their significant other or
                and group activity with friends.
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
          </div>
<hr />
          <div>
            <h2 className="underline">CAREER HISTORY</h2>
            <div className="career">
              <h3>Financial Analyst</h3>
              <p>11/2017 | Duluth, GA</p>
              <p>Primerica</p>
            </div>
            <div className="career">
              <h3>Director of Percussion Programs</h3>
              <p>08/2014-10/2017 | Atlanta, GA</p>
              <p>The Westminster Schools</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
