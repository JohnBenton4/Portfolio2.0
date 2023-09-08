import React, { } from "react";
import { Link } from "react-router-dom";
import "./dateApp.css";

const DateApp = () => {
  return (
    <>

    <p>This is a test</p>
    <Link to="/page2"><button>
              Go to Page 2 
            </button>
            </Link>

      {/* <div class="container">
        <h1 class="name">Date Idea App</h1>
        <hr />
        <h2 class="overview">Overview</h2>
        <div class="grid">
          <div>
            <h2 class="vision">Vision</h2>
            <p>
              My goal in this project was to create an app that could be used by
              people just like me. I have a hard time thinking of fun date
              ideas, and even when I do, often times I'm not sure where I could
              go to make the date idea a reality. This app solves those
              problems.
            </p>
            <h2 class="design">Design</h2>
            <p>
              A clear and clean UI was important for me on this project. The
              emphasis is on the functionality. A few notes about design:
            </p>
            <ul class="unlist">
              <li>
                I wanted the UI to be unassuming (letting the user use it
                inconspicuously if they needed to plan something as a surprise
                while in the company of others)
              </li>
              <li>
                There are three options to choose from, making it efficient for
                the user
              </li>
              <li>
                After choosing one of the first search options, the other two
                submit buttons become disabled
              </li>
            </ul>
            <p>
              A small amount of bootstrap was used to give the submit buttons a
              streamlined look.
            </p>
          </div>
          <div>
            <img
              src="../images/react-img.jpeg"
              alt="react image"
              class="date-idea-app-img"
            />
            <h2 class="logistics">Logistics</h2>
            <ul>
              <li>Development: September 15 - 27</li>
              <li>
                My roles: This was an individual project, everything you see was
                done by me.
              </li>
            </ul>
            <p></p>
          </div>
        </div>
        <hr />

        <h2 class="results">Results</h2>
        <div class="grid2">
          <div>
            <h2 class="features">Features</h2>
            <p>
              I really enjoyed working on this challenging project. I explored
              beyond the requirements to create a more technically complex
              application. Here are some of the features within my code:
            </p>
            <ul>
              <li>
                Discovered what CORS is and found a solution for CORS errors
              </li>
              <li>
                Successfully fetched information from an API and then inserted
                that information into a second API search to get the final
                results
              </li>
              <li>
                Disabled submit buttons after another submit button was clicked
              </li>
              <li>
                Used basic bootstrap to streamline the look of the submit
                buttons
              </li>
              <li>The use of useEffect to disable buttons</li>
              <li>
                The project can be located here:
                <a href="https://github.com/JohnBenton4/react-date-idea-app">
                  Date Idea App
                </a>
              </li>
              <li>
                The live deployment can be found here:
                <a href="https://date-idea-app.netlify.app/"> Live</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="code-examples">Code Examples</h2>
            <p>Here are some examples of my code in the project.</p>
            <ol>
              <li>
                <p>
                  The first image of the app.js page shows the use of useEffect
                  in order to disable buttons when necessary. In addition you
                  can see the use of onSet for the different lists. This portion
                  of the code helped the children talk to the parent and then
                  back to the children again.
                </p>
                <br />
                <img
                  src="react-1.jpeg"
                  alt="react 1 image"
                  class="react-1-img"
                />
                <br />
                <p>
                  The next two images are part of one of the first API fetches.
                  The TypeList.js image shows the API call based on a type of
                  date and the image that shows 'function Type' shows how 'type'
                  is used to fill in the information for the API call.
                </p>
                <br />
                <img
                  src="react-2.jpeg"
                  alt="react 2 image"
                  class="react-2-img"
                />
                <img
                  src="react-3.jpeg"
                  alt="react 3 image"
                  class="react-3-img"
                />
              </li>

              <li>
                <p>
                  Below is an image of the second API call which finds a
                  location for the date idea that the user chooses. The string
                  that was found from the first API is automatically inserted
                  into the second API without any human intervention from the
                  user. Additionally, you will see the 'Bearer Id' has been
                  hidden for privacy purposes in a secret.js file.
                </p>
                <img
                  src="react-4.jpeg"
                  alt="react 4 image"
                  class="react-4-img"
                />
              </li>
            </ol>
          </div>
          <div>
            <h2 class="reflect">Project Reflection</h2>
            <p>
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
          </div>
        </div>
      </div> */}
    </>
  );
};

export default DateApp;
