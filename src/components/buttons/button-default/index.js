import React from 'react'
import c from './style.module.css'

const getButtonClass = type => {
  if (type === 'default') return c.default
  else if (type === 'active') return c.active
  return c.default
}

const ButtonDefault = ({text, submit, type}) => {
  const btnClass = `${c.button} ${getButtonClass(type)}`

  return (
    <button className={btnClass} onClick={submit}>
      {text}
    </button>
  )
}

export {
  ButtonDefault
}
