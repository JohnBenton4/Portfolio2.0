import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "John Benton - Home";
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container-home">
        <div className="intro">
          <div className="johnbenton">JOHN BENTON</div>
          <div className="credentials">Web Developer / Designer</div>
        </div>
        <div className="link-container">
          <div className="links">
            <Link to="/work">
              <h1>Work</h1>
            </Link>
            <Link to="/about">
              <h1>About</h1>
            </Link>
            <Link to="/resume">
              <h1>Resume</h1>
            </Link>
            <Link to="/contact">
              <h1>Contact</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
