import React, { Component } from "react";

class FunStuff extends Component {
  render() {
    return (
      <div>
        <p className="comment">
          // fun and misc.
          ------------------------------------------------------------------------------------
        </p>
        <p>> </p>
        <p>> cd ../Miscellanous</p>
        <p>> head ./otherstuff.txt</p>
        <p>
          > <span className="seafoamText">interests/hobbies: </span>
          <span className="magentaText">
            [vinyl, sneaker collecting, music production, coffee, 76ers,
            weightlifting (beginner!)]
          </span>
        </p>
        <p>
          > <span className="seafoamText">book I'm currently reading: </span>
          <span className="magentaText">
            [The Winter Fortress by Neal Bascomb]
          </span>
        </p>
        <p>
          > <span className="seafoamText">favorite movie(s): </span>
          <span className="magentaText">
            [Full Metal Jacket, Raising Arizona, A Town Called Panic (it's a
            tie)]
          </span>
        </p>
        <p>
          > <span className="seafoamText">music I've been listening to: </span>
          <span className="magentaText">
            [JDilla - Donuts, Aphex Twin - Syro, Miles Davis - Bitches Brew,
            Glenn Miller]
          </span>
        </p>
        <p>
          >{" "}
          <span className="seafoamText">
            cool things you should check out:{" "}
          </span>
          <span className="magentaText">
            [
            <a href="https://art42.net" target="_blank" className="magentaText">
              art42
            </a>
            ,
            <a
              href="https://talktotransformer.com"
              target="_blank"
              className="magentaText"
            >
              {" "}
              Talk to Transformer
            </a>
            ]
          </span>
        </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <p>> </p>
        <div class="text">> more to come...</div>
      </div>
    );
  }
}

export default FunStuff;
