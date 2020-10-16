import React from "react";

const SocialMediaLinks = (props) => {
  return (
    <div className="SocialMediaLinks flex justify-center items-center">
      <a
        className="color-primary h3 pl2 pr2 pt1 pb2"
        href="http://www.linkedin.com/in/lisatrevis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        className="color-primary h3 pl2 pr2 pt1 pb2"
        href="http://www.github.com/LisaTrevis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a
        className="color-primary h3 pl2 pr2 pt1 pb2"
        href="http://www.codepen.io/LisaTrevis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
