import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <section className="footerContainer">
      <div className="contactContainer">
        <div className="gitHub">
          <FontAwesomeIcon icon={faCode} />
          https://github.com/JacobTTorres/Subscription-Services
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          jacobttorres@hotmail.com
        </div>
      </div>
    </section>
  );
}
