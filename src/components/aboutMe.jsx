import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <p className="comment">
          // introduction
          -----------------------------------------------------------------------------------------
        </p>
        <p>
          <span className="italic">function </span>
          <span class="greenText">getBio</span>
          <span class="whiteText">()</span>
        </p>
        <p className="whiteText">{"{"}</p>
        <p className="functionBody">
          <span className="redText">return </span>
          <span className="yellowText">'{this.props.about}'</span>
          <span className="whiteText">;</span>
        </p>
        <p className="whiteText">{"}"}</p>
      </div>
    );
  }
}

export default AboutMe;
