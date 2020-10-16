import React from "react";

import {
  slideshowAnimationTimeout,
  slideshowAnimationInStyle
} from "../AppConstant";

const Slideshow = ({ children = [] }) => {

  const [activeSlideIdx, setActiveSlideIdx] = React.useState(0);

  let timeout;
  let idxToUse;

  React.useEffect(() => {
    // eslint-disable-next-line
    idxToUse = activeSlideIdx + 1;
    if (idxToUse >= children.length) {
      idxToUse = 0;
    }
    // eslint-disable-next-line
    timeout = setTimeout(
      () => setActiveSlideIdx(idxToUse),
      slideshowAnimationTimeout
    );
    return () => clearTimeout(timeout);
  });

  if (!children.length) return null;

  return (
    <div className="SlideshowWrapper" style={slideshowAnimationInStyle}>
      {children[activeSlideIdx]}
    </div>
  );
};

export default Slideshow;
