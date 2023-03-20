import React from "react";

import Form from "react-bootstrap/Form";

function CustomSelect({ titelFieald, option,name, handleChange, style }) {
  return (
    <div>
    <label className="m-2">{titelFieald}</label>
          <select name={name} onChange={handleChange} style={style}>
            {option.map((op) => (
              <option value={op.value}>{op.label}</option>
            ))}
          </select>
    </div>
  );
}

export default CustomSelect;