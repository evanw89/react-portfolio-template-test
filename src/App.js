import "./style/Core.css";

import React from "react";

import {
  pages,
  componentsMapByConstName,
  landingPageKey,
  UP_ARROW_KEY_CODE,
  LEFT_ARROW_KEY_CODE,
  DOWN_ARROW_KEY_CODE,
  RIGHT_ARROW_KEY_CODE
} from "./AppConstant";

import MyViewRenderer from "./components/MyViewRenderer";
import ContactBtn from "./components/ContactBtn";
import NextViewBtn from "./components/NextViewBtn";

const App = (props) => {
  const [activeView, setActiveView] = React.useState(landingPageKey);

  const activePage = { ...pages[activeView] };
  const ActiveViewComponent = componentsMapByConstName[activePage.Component];
  const nextView = activePage.nextView;
  const prevView = activePage.prevView;

  const _handleKeyDown = (e) => {
    switch (e.keyCode) {
      case UP_ARROW_KEY_CODE:
      case LEFT_ARROW_KEY_CODE:
        if (prevView) {
          setActiveView(prevView.view);
        }
        break;
      case DOWN_ARROW_KEY_CODE:
      case RIGHT_ARROW_KEY_CODE:
        if (nextView) {
          setActiveView(nextView.view);
        }
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", _handleKeyDown);
    return () => document.removeEventListener("keydown", _handleKeyDown);
  });

  return (
    <MyViewRenderer>
      <div className="PageWrapper">
        <ActiveViewComponent />
      </div>
      <ContactBtn />
      {nextView ? (
        <NextViewBtn
          label={nextView.label}
          position={nextView.position || "right"}
          onClick={() => {
            setActiveView(nextView.view);
          }}
        />
      ) : null}
      {prevView ? (
        <NextViewBtn
          label={prevView.label}
          position={prevView.position || "left"}
          onClick={() => {
            setActiveView(prevView.view);
          }}
        />
      ) : null}
    </MyViewRenderer>
  );
};

export default App;
