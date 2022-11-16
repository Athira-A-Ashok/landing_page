import React from "react";
import Navbar from "../Navbar/Navbar";
import work from "../Images/work.png";
import Group467 from "../Images/Group 467.png";
import Block from "../Images/block.png";
import newimg from "../Images/newimg.png";
import Article from "../Images/Article.png";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="banner-main">
        <h1>Happiness Is Our Culture</h1>
        <p>
          The productivity and prosperity of an organisation is the reflection
          of the happiness and contentment of its employees. We believe that is
          what builds a family and the nation too. Happy employees are not just
          an asset to the organisation, but the love, contentment and enthusiasm
          they display build the whole world.So it is our prime responsibility
          to give a conducive, happy work culture for our employees, a climate
          which gives them opportunities for self growth and skill development.
        </p>
        <img src={work} />
        <div className="banner-sub">
          <img src={Group467} />
          <div className="banner-sub-content">
            <h1>
              What Do We Do To Make Our Employees Stay Happy And Satisfied ?
            </h1>
            <p>
              <ion-icon
                style={{ fontSize: "20px" }}
                name="checkmark-circle-outline"
              ></ion-icon>
              Listen to them. We give opportunities for them to express their
              views- personal and official.
            </p>
            <p>
              <ion-icon name="checkmark-circle-outline"></ion-icon>Appreciate
              the employees for the effort put in verbally and also through
              incentives, awards, accolades and public acknowledgements in
              meetings.
            </p>
            <p>
              <ion-icon
                style={{ fontSize: "35px" }}
                name="checkmark-circle-outline"
              ></ion-icon>
              Organise training programmes to enhance their professional skills,
              and also for personal re engineering to build strong self- esteem,
              develop interpersonal, social, team communication skills and
              attitude.
            </p>
            <p>
              <ion-icon
                style={{ fontSize: "35px" }}
                name="checkmark-circle-outline"
              ></ion-icon>
              The work environment is made proactive, positive, calm, joyful,
              effective, productive and enjoyable through meditation and other
              Self Building activities.
            </p>
            <p>
              <ion-icon
                style={{ fontSize: "20px" }}
                name="checkmark-circle-outline"
              ></ion-icon>
              Timely Financial assistance is rendered as a part of employee
              welfare scheme as and when required.
            </p>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-sub">
          <div>
            <img className="block" src={Block} />
          </div>
          <img className="newimg" src={newimg} />
        </div>
        <div className="article">
          <img src={Article} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
