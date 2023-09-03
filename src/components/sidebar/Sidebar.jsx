import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="home-button">
                HOME
              </a>
            </li>
            <br></br>
            <li className="nav__item">
              <a
                href="https://www.linkedin.com/in/john-benton/"
                className="linkedIn"
              >
                LI
              </a>
            </li>
            <br></br>
            <li className="nav__item">
              <a href="https://github.com/JohnBenton4" className="gitHub">
                GH
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2023</span>
        </div>
      </aside>

      <div className="nav__toggle">
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
