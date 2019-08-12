//SurveyField contains logic to render single
//label and single input
import React from 'react';

export default ({input, label, name, meta: { error, touched }}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...input} className="form-control" />
      <div className="errorText">
        {touched && error}
      </div>
    </div>
  )
}