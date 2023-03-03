import React from 'react'
import c from './style.module.css'

const FormikField = ({form, name, placeholder, type}) => {
  const error =  form && form.touched[name] && Boolean(form.errors[name]);
  const inputClass = error ? `${c.input} ${c.inputError}` : c.input
  const typeValue = type ? type : 'text'


  return (
    <input
      type={typeValue}
      placeholder={placeholder}
      className={inputClass}
      name={name}
      value={form.values[name]}
      onChange={form.handleChange}
    />
  )
}


export {
  FormikField
}
