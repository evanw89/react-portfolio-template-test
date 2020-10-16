import React from "react";

const AccordionDropdown = ({
  label = "",
  shouldExpandOnMount = false,
  children
}) => {
  const [isExpanded, setIsExpanded] = React.useState(shouldExpandOnMount);

  return (
    <div className={`AccordionDropdown card m2 ${label.split(" ").join("")}`}>
      <div className="AccordionDropdownHeader h3 w100pct flex justify-center bg-primary-light b-b-primary">
        <div className="flex-auto p2">{label}</div>
        <div className="p2 pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`} />
        </div>
      </div>
      {isExpanded ? (
        <div className="AccordionDropdownBody pt3 pb4 pl4 pr4">{children}</div>
      ) : null}
    </div>
  );
};

export default AccordionDropdown;
