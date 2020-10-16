import React from "react";

import {
  titleAnimationInStyle,
  titleAnimationOutStyle,
  titleAnimationTimeout
} from "../AppConstant";

export const Title = ({ title }) => {
  return (
    <div className="Title" style={titleAnimationOutStyle}>
      {title}
    </div>
  );
};

const TitleSpinner = ({ titles = [] }) => {

  const [currentIdx, setCurrentIdx] = React.useState(0);

  if (currentIdx > titles.length - 1) {
    setCurrentIdx(0);
  }

  let activeTitle = titles[currentIdx];

  React.useEffect(() => {
    // eslint-disable-next-line
    const timeout = setTimeout(() => {
      setCurrentIdx(currentIdx + 1);
      // eslint-disable-next-line
      activeTitle = titles[currentIdx];
    }, titleAnimationTimeout);
    return () => clearTimeout(timeout);
  });

  if (!titles.length) return null;

  return (
    <div className="TitleWrapper" style={titleAnimationInStyle}>
      <Title title={activeTitle} />
    </div>
  );
};

export default TitleSpinner;
