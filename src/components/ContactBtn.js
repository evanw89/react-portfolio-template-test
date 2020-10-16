import React from "react";

import ContactModal from "./ContactModal";

const ContactBtn = ({ onClick = () => {} }) => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  return (
    <>
      <div
        className="ContactBtn fixed card round h2 flex justify-center items-center pointer"
        onClick={() => setIsContactModalOpen(true)}
      >
        <i className="fas fa-comments" />
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        closeModal={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default ContactBtn;
