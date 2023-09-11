import React, { useEffect } from "react";
import Sidebar3 from "../components/sidebar3/Sidebar3";
import reactImg from "../assets/react-img.jpeg";
import React1 from "../assets/React-1.jpeg";
import React2 from "../assets/React-2.jpeg";
import React3 from "../assets/React-3.jpeg";
import React4 from "../assets/React-4.jpeg";

export default function DateApp() {
  useEffect(() => {
    document.title = "John Benton - Date App";
    document.body.style.backgroundColor = "rgb(0,0,0)";
  }, []);
  return (
    <>
      <Sidebar3 />
      <div className="container-date">
        <h1 className="name">Date Idea App</h1>
        <img src={reactImg} alt="reactImg" className="date-app-img" />

        <div className="grid">
          <section className="top-left">
            <h2 className="vision">Vision</h2>
            <p className="date-words">
              My goal in this project was to create an app that could be used by
              people just like me. I have a hard time thinking of fun date
              ideas, and even when I do, often times I'm not sure where I could
              go to make the date idea a reality. This app solves those
              problems.
            </p>
            <h2 className="design">Design</h2>
            <p className="date-words">
              A clear and clean UI was important for me on this project. The
              emphasis is on the functionality. A few notes about design:
            </p>
            <ul className="unlist">
              <li >
                - I wanted the UI to be unassuming (letting the user use it
                inconspicuously if they needed to plan something as a surprise
                while in the company of others)
              </li>
              <li >
                - There are three options to choose from, making it efficient
                for the user
              </li>
              <li >
                - After choosing one of the first search options, the other two
                submit buttons become disabled
              </li>
            </ul>
            <p className="date-words">
              A small amount of bootstrap was used to give the submit buttons a
              streamlined look.
            </p>
          </section>
          <section className="logistic-section">
            <h2 className="logistics">Logistics</h2>
            <ul className="logistics-info">
              <li >Development: September 15 - 27</li>
              <li >
                My roles: This was an individual project.
              </li>
            </ul>
            <p></p>
          </section>
        </div>
<br />
        <div className="grid2">
          <section className="mid-left">
            <h2 className="features">Features</h2>
            <p className="date-words">
              I really enjoyed working on this challenging project. I explored
              beyond the requirements to create a more technically complex
              application. Here are some of the features within my code:
            </p>
            <ul className="unlist">
              <li >
                -Discovered what CORS is and found a solution for CORS errors
              </li>
              <li >
                -Successfully fetched information from an API and then inserted
                that information into a second API search to get the final
                results
              </li>
              <li >
                -Disabled submit buttons after another submit button was clicked
              </li>
              <li >
                -Used basic bootstrap to streamline the look of the submit
                buttons
              </li>
              <li >-The use of useEffect to disable buttons</li>
              <br />
              <p className="date-words">
                The project can be located here:
                <a className="date-app-github" href="https://github.com/JohnBenton4/react-date-idea-app">
                DATE APP
                </a>
              </p>
              <p className="date-words">
                The live deployment can be found here:
                <a className="date-app-live" href="https://date-idea-app.netlify.app/"> LIVE</a>
              </p>
            </ul>
          </section>
<br />
<br />

          <section className="lower-left">
            <h2 className="code-examples">Code Examples</h2>
            <p className="date-words">Here are some examples of my code in the project.</p>
            <ol>
                <p className="date-words">
                  The first image of the app.js page shows the use of useEffect
                  in order to disable buttons when necessary. In addition you
                  can see the use of onSet for the different lists. This portion
                  of the code helped the children talk to the parent and then
                  back to the children again.
                </p>
                <br />
                <img src={React1} alt="React1" className="react-1-img" />
                <br />
                <p className="date-words">
                  The next two images are part of one of the first API fetches.
                  The TypeList.js image shows the API call based on a type of
                  date and the image that shows 'function Type' shows how 'type'
                  is used to fill in the information for the API call.
                </p>
                <br />
                <img src={React2} alt="React2" className="react-2-img" />
                <br />

                <img src={React3} alt="React3" className="react-3-img" />

                <p className="date-words">
                  Below is an image of the second API call which finds a
                  location for the date idea that the user chooses. The string
                  that was found from the first API is automatically inserted
                  into the second API without any human intervention from the
                  user. Additionally, you will see the 'Bearer Id' has been
                  hidden for privacy purposes in a secret.js file.
                </p>
                <img src={React4} alt="React4" className="react-4-img" />
            </ol>
          </section>
          <br />
          <br />

          <section className="bottom">
            <h2 className="reflect">Project Reflection</h2>
            <p className="reflection-details">
              This was the first project that I worked on by myself. It was much
              easier to formulate a plan a strategy for this project and time
              management was much less complicated. There were many moments in
              the this project where I really had to stretch my mind and search
              for information in resources. The most difficult portion was
              getting the string from the first API fetch to populate in the
              second API fetch. I am very pleased with the functional results
              and look forward to revisiting the project to add a small amount
              of visual interest.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
