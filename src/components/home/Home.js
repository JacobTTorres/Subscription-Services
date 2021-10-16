import FreeSubscription from "../freeSubscription/FreeSubscription";
import PremiumSubscription from "../premiumSubscription/PremiumSubscription";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./home.css";

function Home() {
  return (
    <div>
      <div className="Home">
        <Header className="header" />
        <div className="subOptions">
          <FreeSubscription className="freeSub" />
          <PremiumSubscription className="premiumSub" />
        </div>
        <Footer className="Footer" />
      </div>
      <div className="halfshadow"></div>
    </div>
  );
}

export default Home;
