import React from 'react';
import { ErrorMessage, useField } from 'formik';

import s from './TextFieldForm.module.scss';

const TextFieldForm = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className={s.containerField}>
      <label htmlFor={field.name} className={s.Label}>
        {label}
        <input {...field} {...props} autoComplete="off" />
      </label>
      <ErrorMessage
        component="div"
        name={field.name}
        className={s.fieldError}
      />
    </div>
  );
};

export default TextFieldForm;
