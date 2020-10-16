import React from "react";

import { portfolioPageTitleMsg, projects } from "../AppConstant";

const ProjectList = ({ children }) => {
  if (!children.length) return null;
  return (
    <div className="ProjectsList flex flex-wrap justify-center align-center">
      {children}
    </div>
  );
};

const ProjectItem = ({
  project = {},
  widthClass = "",
  projectKey = "",
  onClick = () => {},
  idx,
}) => {
  if (!Object.keys(project).length) return null;

  const { label = "", className = "", imgSrc = "" } = project;

  return (
    <div className={`ProjectItemWrapper ${widthClass} p3`} key={idx}>
      <div
        className={`ProjectItem ${className} bg-primary-light card flex justify-center items-center pt2 pb2 pointer`}
        onClick={() => {
          onClick(projectKey);
        }}
      >
        <div className="h3 white-space-pre">{label.split(" ").join("\n")}</div>
        {imgSrc ? (
          <img className="bg-gray" src={imgSrc} alt={label} />
        ) : null}
      </div>
    </div>
  );
};

const ProjectModal = ({ openProjectsKey = "", closeModal = () => {} }) => {
  if (!openProjectsKey) return null;

  const projectsToShow = projects[openProjectsKey].listItems || [];

  return (
    <div className="ProjectModalWrapper absolute p4">
      <div className="ProjectModal relative card p3">
        <div className="align-center h2 pt1 mb3">
          {projects[openProjectsKey].label}
        </div>
        {projectsToShow.map((item, idx) => (
          <div className="Project card ml2 mr2 mb3" key={idx}>
            <a
              className="h100pct flex items-center"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.imgSrc ? (
                <img
                  className="ProjectImage h100pct w25pct"
                  src={item.imgSrc}
                  alt={item.label}
                />
              ) : (
                <div className="ProjectImage h100pct w25pct bg-gray" />
              )}
              <div className="p2 pl3 ">
                <div className="h3 mb1">{item.label}</div>
                <p>{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div
        className="ProjectModalCloseBtn absolute card round h2 flex justify-center items-center pointer"
        onClick={closeModal}
      >
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

const PortfolioPage = ({ prevView = () => {} }) => {
  const [openProjectsKey, setOpenProjectsKey] = React.useState();

  return (
    <>
      <div className="Page PortfolioPage pl3 pr3">
        <div className="h2 align-center pt3 pb3 uppercase">
          {portfolioPageTitleMsg}
        </div>
        <div className="ProjectsWrapper">
          <ProjectList>
            {Object.keys(projects || []).map((projectKey, idx) => (
              <ProjectItem
                key={idx}
                widthClass={
                  Object.keys(projects).length > 6 ? "w25pct" : "w33pct"
                }
                project={projects[projectKey]}
                projectKey={projectKey}
                onClick={setOpenProjectsKey}
                idx={idx}
              />
            ))}
          </ProjectList>
        </div>
      </div>
      <ProjectModal
        openProjectsKey={openProjectsKey}
        closeModal={() => setOpenProjectsKey()}
      />
    </>
  );
};

export default PortfolioPage;
