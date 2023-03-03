import React from 'react'
import c from './style.module.css'


const Wrap = ({children}) => {

  return (
    <div className={c.wrap}>
      {children}
    </div>
  )
}


export {
  Wrap
}
