import React from "react";
import PremiumPic from "../premiumPic/PremiumPic";

import "./premiumSubscription.css";

export default function PremiumSubscription() {
  return (
    <section className="premiumSubContainer">
      <div>
        <h1 className="title">Premium Subscription</h1>
        <PremiumPic className="picture" />
        <ul
          className="listItem"
          style={{ flex: 1, flexWrap: "wrap", inlineSize: "30vw" }}
        >
          <li className="item">Online Chord Book & Scale Chart</li>
          <li className="item">Online tabs</li>
          <li className="item">Play along tracks </li>
          <li className="item">
            Online lessons with any of our Professionals (unlimited)
          </li>
        </ul>
        <h3 className="price">$15.99 per month</h3>
        <div className="buttonContainer">
          <button className="button">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
