import React, {useState}from "react";
import Modal from "react-bootstrap/Modal";
import CustomInput from "../Atom/Input"
import CustomButton from "../Atom/Button"
function CustomModal({
    modalTitle,
  titelFieald,
  placeholder,
  name,
  variantClose,
  titleClose,
  variantSave,
  titleSave,
  show,
  handleClose
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomInput
          titelFieald={titelFieald}
          placeholder={placeholder}
          name={name}
        />
      </Modal.Body>
      <Modal.Footer>
        <CustomButton
          variant={variantClose}
          title={titleClose}
          handleClick={handleClose}
        />
        <CustomButton variant={variantSave} title={titleSave} />
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
