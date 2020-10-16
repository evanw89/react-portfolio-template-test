import React from "react";

import {
  educationItems,
  experienceItems,
  experiencePageTitleMsg,
  myTestimonials,
  slideshowAnimationOutStyle
} from "../AppConstant";

import Slideshow from "../components/Slideshow";
import AccordionDropdown from "../components/AccordionDropdown";

const ExperiencePage = ({ nextView = () => {}, prevView = () => {} }) => {
  return (
    <div className="Page ExperiencePage">
      <div className="h2 align-center pt3 pb3 uppercase">
        {experiencePageTitleMsg}
      </div>
      <div className="TestimonialsBody w75pct pt3 pb3 align-center">
        <Slideshow>
          {(myTestimonials || []).map((testimonial, idx) => {
            return (
              <div
                className="TestimonialItem"
                style={slideshowAnimationOutStyle}
                key={idx}
              >
                <i className="color-primary mb2 fas fa-quote-left"></i>
                <div className="flex flex-row justify-center items-center">
                  {testimonial.imgSrc ? (
                    <img
                      className="TestimonialImage mt2 mb2 round"
                      src={testimonial.imgSrc}
                      alt={testimonial.title}
                    />
                  ) : (
                    <div className="TestimonialImage mt2 mb2 round bg-gray" />
                  )}
                  <div className="align-left pl3">
                    <div className="pt2 pb2">{testimonial.quote}</div>
                    <hr className="ml0 w25pct b-primary-thin" />
                    <div className="mt2 bold">
                      <span className="pt2 nowrap">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slideshow>
      </div>
      <div className="ExperienceBody">
        <AccordionDropdown label="Experience" shouldExpandOnMount={true}>
          {experienceItems.map((item, idx) => {
            return (
              <div className="ExperienceItem pt2 pb2" key={idx}>
                <div className="flex justify-between flex-wrap">
                  <span className="ExperienceItemLabel h4 bold pb1">
                    {item.label || ""}
                  </span>
                  <span className="uppercase pb1">{item.subTitle || ""}</span>
                </div>
                <div className="pb1">{item.description || ""}</div>
              </div>
            );
          })}
        </AccordionDropdown>
      </div>
      <div className="EducationBody">
        {!!educationItems.length ? (
          <AccordionDropdown label="Education">
            {educationItems.map((item, idx) => {
              return (
                <div className="EducationItem pt2 pb2" key={idx}>
                  <div className="flex justify-between flex-wrap">
                    <span className="EducationItemLabel h4 bold pb1">
                      {item.label || ""}
                    </span>
                    <span className="uppercase pb1">
                      {item.subTitle || ""}
                    </span>
                  </div>
                  <div className="pb1">{item.description || ""}</div>
                </div>
              );
            })}
          </AccordionDropdown>
        ) : null}
      </div>
    </div>
  );
};

export default ExperiencePage;
