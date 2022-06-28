import React from "react";
import { Form } from "react-bootstrap";

function InputText({
  title, star, type, idName, value, placeholder, classLabel, handleChange,
  invalid, handleInvalid, disabled, classFormGroup, as, rows, classFormCon, 
}) {
  return (
    <Form.Group className={classFormGroup}>
      {title ? <Form.Label className={`${classLabel} mb-1`}>{title}</Form.Label> : ""}
      <Form.Control type={type} id={idName} name={idName}
        className={invalid ? "is-invalid" : classFormCon ? classFormCon : ""}
        as={as} rows={rows}
        value={value} disabled={disabled ? true : false}
        placeholder={placeholder}
        onChange={e => {
          handleChange(e.target.value)
          if (handleInvalid) {
            handleInvalid()
          }
        }} />
      {invalid ? <div className="invalid-error">{invalid}</div> : ""}


      <style jsx="true" global="true">{`
            .form-control {
                border-radius: 10px ;
            }

            .form-control:focus {
                border-radius: 10px ;
            }
               
            `}</style>
    </Form.Group>
  );
}

export default InputText;