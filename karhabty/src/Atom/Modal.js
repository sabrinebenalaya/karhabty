import React, {useState}from "react";
import Modal from "react-bootstrap/Modal";
import CustomInput from "../Atom/Input"
import CustomButton from "../Atom/Button"
import { useDispatch } from "react-redux";
import {updateAgency} from "../Redux/Actions/actionAgency"
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
  handleClose,
  id
}) {

    const [text, setText] = useState("");
    const [attribut, setAttribut] = useState("");
    const dispatch = useDispatch();
    const save = ()=>{
        dispatch(updateAgency(attribut,text, id)) 
       handleClose()
    }
const handleChangeState =(e)=>{
    setText(e.target.value) ;
    setAttribut(e.target.name); 
}
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
          handleChange={handleChangeState}
        />
      </Modal.Body>
      <Modal.Footer>
        <CustomButton
          variant={variantClose}
          title={titleClose}
          handleClick={handleClose}
        />
        <CustomButton variant={variantSave} title={titleSave} handleClick={save}/>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
