import React from "react";

import { avatarImgSrc } from "../AppConstant";

const AvatarImg = (props) => {
  return (
    <div className="align-center p2">
      <img
        className="AvatarImg bg-gray round"
        src={avatarImgSrc}
        alt="Me!"
      />
    </div>
  );
};

export default AvatarImg;
