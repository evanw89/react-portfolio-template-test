import React from "react";

import {
  aboutPageTitleMsg,
  aboutMeBodyContent,
  aboutMeSubTitle,
} from "../AppConstant";

import AvatarImg from "../components/AvatarImg";
import SocialMediaLinks from "../components/SocialMediaLinks";

const AboutPage = (props) => {
  return (
    <div className="Page AboutPage">
      <div className="h2 align-center pt3 pb3 uppercase">
        {aboutPageTitleMsg}
      </div>
      <AvatarImg />
      <SocialMediaLinks />
      <div className="AboutMeContent pt1">
        <div className="h2 pb1 b-b-primary">{aboutMeSubTitle}</div>
        <p className="pt2 white-space-pre-line">{aboutMeBodyContent}</p>
      </div>
    </div>
  );
};

export default AboutPage;