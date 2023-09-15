import React, { useEffect } from "react";
import Sidebar2 from "../components/sidebar2/Sidebar2";
import { Link } from "react-router-dom";

export default function Work() {
  useEffect(() => {
    document.title = "John Benton - Work";
    document.body.style.backgroundColor = "rgb(0,0,0)";
  }, []);
  return (
    <>
      <Sidebar2 />
      <div className="container-work">
        <section className="greeting">
          <div className="work-title">
            <h1 style={{ color: "rgb(236, 235, 228)" }}>Work</h1>
          </div>
          <br></br>
          <section className="work-info">
            Here are examples of my most recent work featuring examples of front
            end design, back end database and API usage
            <br />
            <br />
            The world of technology constantly evolves and continues to offer
            new and exciting opportunities. Likewise, I am always learning and
            gaining new skills every day.
            <br />
            <br />

            On the Internet:
            <a
              href="https://www.linkedin.com/in/john-benton/"
              className="linkedIn"
            >
              LinkedIn
            </a>
            /
            <a href="https://github.com/JohnBenton4" className="gitHub">
              Github
            </a>
          </section>
        </section>
        <section className="work-right">
        <Link to="/dateApp">
              <h1 className="date-app-styles" style={{ color: "rgb(236, 235, 228)" }}>Date App</h1>
            </Link>
            <Link to="/introvertEmpowerment">
              <h1 className="introvert-styles" style={{ color: "rgb(236, 235, 228)" }}>Introvert Empowerment</h1>
            </Link>
        </section>
      </div>
    </>
  );
}
