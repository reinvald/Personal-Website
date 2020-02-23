import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./components/aboutMe.jsx";
import TechnicalStuff from "./components/technicalStuff.jsx";
import FindMe from "./components/findMe.jsx";
import FunStuff from "./components/funStuff.jsx";
import HttpsRedirect from "react-https-redirect";
import "./styles/index.css";

let aboutText =
  "Hello! My name is Aavo. I hail from Tartu, Estonia, but grew up in Philly. I'm a senior at the University of Pennsylvania and a proud alumnus of Central High School (275). " +
  "I'm a candidate for a Bachelor of Science in Engineering degree with a major in computer science and a minor in mathematics. Upon completion of my degree I will be a fulltime " +
  "software developer at Publicis Sapient in the company's Chicago office.";

ReactDOM.render(
  <HttpsRedirect>
    <div class="parent flex-parent">
      <div class="child flex-child">
        <AboutMe about={aboutText} />
        <TechnicalStuff />
      </div>
      <div class="child flex-child">
        <FindMe />
        <FunStuff />
      </div>
    </div>
  </HttpsRedirect>,
  document.getElementById("root")
);
