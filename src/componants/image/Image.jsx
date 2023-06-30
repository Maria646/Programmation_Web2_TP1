import React from 'react'
import "./image.css"

const Image = (props) => {
  return (
      <img src={props.src} alt={props.alt} />
  )
}

export default Image