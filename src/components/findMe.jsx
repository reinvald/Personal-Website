import React, { Component } from "react";

class FindMe extends Component {
  render() {
    return (
      <div>
        <p className="comment">
          // where to find me
          --------------------------------------------------------------------------------
        </p>
        <p>> cd ~/Users/Aavo/Stuff</p>
        <p>> head -n 4 ./wheretofindme.txt</p>
        <p>
          >{" "}
          <span>
            <a
              href="mailto:reinvald@seas.upenn.edu"
              target="_blank"
              className="redText"
            >
              [Email]
            </a>
          </span>
        </p>
        <p>
          >{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/reinvald"
              target="_blank"
              className="redText"
            >
              [LinkedIn]
            </a>
          </span>
        </p>
        <p>
          >{" "}
          <span>
            <a
              href="https://www.github.com/reinvald"
              target="_blank"
              className="redText"
            >
              [GitHub]
            </a>
          </span>
        </p>
        <p>
          >{" "}
          <span>
            <a
              href="https://www.instagram.com/baltic.boy"
              target="_blank"
              className="redText"
            >
              [Instagram]
            </a>
          </span>
        </p>
        <p>> </p>
        <p>> echo "feel free to reach out!"</p>
        <p>
          > <span className="orangeText">feel free to reach out!</span>
        </p>
        <p>> </p>
        <p>> </p>
      </div>
    );
  }
}

export default FindMe;
