import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <section className="footerContainer">
      <div className="contactContainer">
        <div className="gitHub">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </section>
  );
}
