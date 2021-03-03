import React, { useState } from "react";
import Modal from "react-modal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const AboutModal = ({ title, desc }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderColor: "transparent",
      maxWidth: "500px",
      padding: "20px",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        className="btn"
        onClick={openModal}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <p>{title}</p>
      </button>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <p>{desc}</p>
        </div>
        <HighlightOffIcon className="modal__off" onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default AboutModal;
