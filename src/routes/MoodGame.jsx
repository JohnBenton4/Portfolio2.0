import React, { useEffect } from "react";
import Sidebar3 from "../components/sidebar3/Sidebar3";
import moodgame from "../assets/mood-game.jpeg";
import MoodGame1 from "../assets/mood-1.jpeg";
import MoodGame2 from "../assets/mood-2.jpeg";
import MoodGame3 from "../assets/mood-3.jpeg";

export default function MoodGame() {
  useEffect(() => {
    document.title = "John Benton - Mood Game App";
    document.body.style.backgroundColor = "rgb(0,0,0)";
  }, []);
  return (
    <>
      <Sidebar3 />
      <div className="container-mood">
        <h1 className="name">Mood Game</h1>
        <img src={moodgame} alt="moodgame" className="moodgame-img" />
        <div className="grid">
          <section className="top-left">
            <h2 className="vision">Vision</h2>
            <p className="mood-words">
            We set out to build a front-end project that could be not only
            entertaining but also fun and informative.
            </p>
            <h2 className="design">Design</h2>
            <p className="mood-words">
            An important design factor was to keep the UI simple and give it a
            basic feel. The design emphasis is on the information on the page
            and has an 80's video game feel. A few notes about design:
            </p>
            <ul className="unlist">
              <li>
                - Landing page needed to be simple and easy to understand
              </li>
              <li>
                - The use of theater faces, comedy and tragedy, is an homage to age
              old entertainment but in a twenty-first century web app
              </li>
              <li>
                - We used bootstrap due to its flexibility and ease of use.
              </li>
            </ul>
            <p className="mood-words">
              Bootstrap was the main CSS framework used on this project.
            </p>
          </section>
          <section className="logistic-section">
            <h2 className="logistics">Logistics</h2>
            <ul className="logistics-info">
              <li>Development: October 8 - 27</li>
              <li>
                My roles: express.js, postgreSQL, & database set up, login
                credential & bcrypt, API set up, and user profile
              </li>
            </ul>
          </section>
        </div>
        <br />
        <div className="grid2">
          <section className="mid-left">
            <h2 className="features">Features</h2>
            <p className="mood-words">
              This project was very challenging. We completed all the base
              requirements and moved on to extra features that made this app
              standout. Here are some of the features within our code:
            </p>
            <ul className="unlist">
              <li>- API call with a timer to populate only one per 24 hours</li>
              <li>
                - User profiles that are password protected and can hold user
                saved data
              </li>
              <li>
                - The ability to receive text reminders to your phone to
                complete tasks(forth coming)
              </li>
              <li>
                - Establishing a connection between several many to many tables
                for each user
              </li>
              <br />
              <p className="mood-words">
                The project can be located here:
                <a
                  className="introvert-app-github"
                  href="https://github.com/JohnBenton4/Introvert-Empowerment"
                >
                  {" "}
                  INTROVERT EMPOWERMENT
                </a>
              </p>
              <p className="mood-words">
                The live deployment can be found here:
                <a
                  className="introvert-app-live"
                  href="https://introvert-empowerment.herokuapp.com/"
                >
                  {" "}
                  LIVE
                </a>
              </p>
            </ul>
          </section>
          <br />
          <br />
          <section className="lower-left">
            <h2 className="code-examples">Code Examples</h2>
            <p className="mood-words">
              Here are some examples of my code in the project.
            </p>
            <ol>
              <p className="mood-words">
                The first image of the server.js file demonstrates our structure
                for getting and posting. Additionally, part of the bcrypt set up
                is also on the server file. As mentioned before, the bcrypt was
                a very challenging part of the project which is an idea I intend
                on exploring further.
              </p>
              <br />
              <img
                src={MoodGame1}
                alt="MoodGame1"
                className="moodgame1-img"
              />

              <br />
              <p className="mood-words">
                The next image shows a small example of one of our many model
                files used in this project. I built models for the challenges,
                conversations, and pickup lines. All those tables are linked to
                the users table through three separate tables forming the many
                to many relationships.
              </p>
              <br />
              <img
                src={MoodGame2}
                alt="MoodGame2"
                className="moodgame2-img"
              />

              <p className="mood-words">
                The last image below contains code for what we are calling the
                Projects file. This file contains cards that are responsive and
                are really the heart of the functionality of the project. The
                cards contain the challenges, the task manager, and the phone
                text reminder options.
              </p>
              <img
                src={MoodGame3}
                alt="MoodGame3"
                className="moodgame3-img"
              />
            </ol>
          </section>
          <br />
          <br />
          <section className="bottom">
            <h2 className="reflect">Project Reflection</h2>
            <p className="mood-words">
              My group worked very well together on our capstone project, and in
              a relatively short time we were able to create an app that
              surpassed the requirements set forth for the assignment. I learned
              how to implement bcrypt, how to create several many to many
              relationships within one app, how to host websites live through
              Heroku, and much more. I enjoy learning new skills and strategies
              with each project I work on and continue to have a better
              understanding of best practices for front end and back end work.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
