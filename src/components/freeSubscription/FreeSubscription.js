import React from "react";
import FreePic from "../freePic/FreePic";

import "./freeSubscription.css";

export default function FreeSubscription() {
  return (
    <section className="freeSubContainer">
      <div>
        <h1 className="titleCard">free Subscription</h1>
        <FreePic />
        <ul
          className="listItem"
          style={{ flex: 1, flexWrap: "wrap", inlineSize: "30vw" }}
        >
          <li className="included">Online Chord Book & Scale Chart</li>
          <li className="included">Online tabs</li>
          <li className="included">Monthly online group meetings</li>
          <li className="nonIncluded">Play along tracks </li>
          <li className="nonIncluded">
            Online lessons with any of our Professionals (unlimited)
          </li>
        </ul>
        <h3 className="price">Free</h3>
        <div className="buttonContainer">
          <button className="sub">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
