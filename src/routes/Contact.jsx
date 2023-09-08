import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function Contact() {
  return (
    <>
      <Sidebar />
      <div className="container-contact">
<section className="greeting">
    Hello.
</section>
<section className="statement">
    This will be a brief statement.
</section>
<section className="contact-info">
    Email: jtbentoniv@gmail.com
    <br />
    On the Internet: LinkedIn / Github
</section>

      </div>
    </>
  );
}
