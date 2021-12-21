import React from "react";
import {useField} from "formik"

export const SelectLevel = ({label,name,value,onChange,...props}) => {
    
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        {...props}
        onChange={onChange}
        value={value}
      >
        <option value="Débutant">Débutant</option>
        <option value="Amateur">Amateur</option>
        <option value="Confirmé">Confirmé</option>
        <option value="ProA">ProA</option>
        <option value="ProB">ProB</option>
      </select>
    </div>
  );
};
