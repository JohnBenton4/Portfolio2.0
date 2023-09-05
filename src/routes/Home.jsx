import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="container-home">
        <div className="intro">
          <div className="name">JOHN BENTON</div>
          <div className="credentials">Web Developer / Carpenter</div>
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
