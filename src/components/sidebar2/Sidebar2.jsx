import React, { useState } from "react";
import "./sidebar2.css";

const Sidebar2 = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
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

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar2;
