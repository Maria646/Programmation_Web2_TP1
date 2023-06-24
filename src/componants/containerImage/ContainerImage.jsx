import React from 'react'
import "./containerimage.css"

const ContainerImage = (props) => {
  
  return (
    <div className={props.containerImage}>
        {props.children}
    </div>
  )
}

export default ContainerImage