import React from 'react'
import c from './style.module.css'
import ReactLoading from 'react-loading';

const Loading = () => {

  return (
    <div className={c.wrap}>
      <ReactLoading type="spin" color="darkslategrey" height='100px' width='100px' />
    </div>
  )
}

export {
  Loading
}
