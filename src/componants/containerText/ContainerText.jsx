import React from 'react'
import "./containertext.css"

const ContainerText = (props) => {
  return (
    <div className={props.containerText}>
      {props.children}
    </div>
  )
}

export default ContainerText