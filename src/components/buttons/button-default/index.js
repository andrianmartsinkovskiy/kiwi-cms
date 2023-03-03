import React from 'react'
import c from './style.module.css'


const ButtonDefault = ({text, submit}) => {

  return (
    <button className={c.button} onClick={submit}>
      {text}
    </button>
  )
}

export {
  ButtonDefault
}
