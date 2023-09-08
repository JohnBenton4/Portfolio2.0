import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function Contact() {
  useEffect(() => {
    document.title = "John Benton - Contact";
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container-contact">
        <section className="greeting">
          <div className="contact-title">
            <h1>Hello</h1>
          </div>
          <br></br>
          <section className="contact-info">
            Do you need a sleek, well-built website that you can maintain
            yourself? Please reach out.
            <br />
            <br />
            Email: jtbentoniv@gmail.com
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
      </div>
    </>
  );
}
