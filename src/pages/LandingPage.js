import React from "react";

import { titles, landingPageHeroMsg } from "../AppConstant";
import TitleSpinner from "../components/TitleSpinner";

const LandingPage = (props) => {
  return (
    <div className="Page LandingPage flex flex-column justify-center items-center">
      <div>
        <div className="HeroMsg b-b-primary h1 pb1 mb1">
          {landingPageHeroMsg}
        </div>
        <div className="LandingPageTooltip">
          (You can use your arrow keys to navigate, if you'd like!)
        </div>
        <TitleSpinner titles={titles} />
      </div>
    </div>
  );
};

export default LandingPage;
