import React from "react";

import { contactMeHeaderMsg, contactEmail } from "../AppConstant";

import SocialMediaLinks from "./SocialMediaLinks";

const ContactModal = ({ isOpen, closeModal = () => {} }) => {
  const [emailBody, setEmailBody] = React.useState("");
  
  if (!isOpen) return null;

  return (
    <div className="ContactModalWrapper absolute p4">
      <div className="ContactModal relative p3 card">
        <div className="ContactModalHeader p3 h2 align-center">
          {contactMeHeaderMsg}
        </div>
        <div className="ContactModalBody pt3 align-center">
          <div>
            <SocialMediaLinks />
            <textarea
              className="w75pct b-primary pl2 pr2 pt1 pb1 mt2 mb3"
              rows="12"
              placeholder="What's on your mind?"
              onChange={(e) => setEmailBody(e.target.value)
              }
            />
          </div>
          <div>
            <a
              href={`mailto:${contactEmail}?subject=You%20Have%20A%20Message!&body=${
                encodeURIComponent(emailBody) || ""
              }`}
            >
              <button className="h4 flex justify-center items-center align-center p2 bg-primary border-none color-white border-primary">
                <span className="mr1">Send</span>
                <i className="h2 fas fa-paper-plane"></i>
              </button>
            </a>
          </div>
        </div>
        <div
          className="ContactModalCloseBtn absolute card round h2 flex justify-center items-center pointer"
          onClick={closeModal}
        >
          <i className="color-primary fas fa-times" />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
