import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <nav className="nav">
        <div className="nav__list">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="https://www.linkedin.com/in/john-benton/"
                className="linkedIn"
              >
                LI
              </a>
            </li>
            <li className="nav__item">
              <a href="https://github.com/JohnBenton4" className="gitHub">
                GH
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
