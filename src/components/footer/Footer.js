import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <section className="footerContainer">
      <h3 className="footerTitle">Sorce Code & Contact</h3>
      <div className="contactContainer">
        <div className="gitHub">
          <FontAwesomeIcon className="icon" icon={faCode} />
          <a
            className="links"
            href="https://github.com/JacobTTorres/Subscription-Services"
          >
            GitHub
          </a>
        </div>
        <div className="email">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <p className="myEmail">jacobttorres@hotmail.com</p>
        </div>
      </div>
    </section>
  );
}
