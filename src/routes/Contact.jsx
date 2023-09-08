import React, { useEffect } from "react";
import Sidebar2 from "../components/sidebar2/Sidebar2";

export default function Contact() {
  useEffect(() => {
    document.title = "John Benton - Contact";
    document.body.style.backgroundColor = "rgb(0,0,0)";
  }, []);
  return (
    <>
      <Sidebar2 />
      <div className="container-contact">
        <section className="greeting">
          <div className="contact-title">
            <h1 style= {{color: 'rgb(236, 235, 228)'}}>Hello</h1>
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
