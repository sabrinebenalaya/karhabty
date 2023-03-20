import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ type, title, variant, style, handleClick }) {
  return (
    <Button type={type} variant={variant} onClick={handleClick} style={style} >
      {title}
    </Button>
  );
}

export default CustomButton;
