import React from 'react'

const Carte = (props) => {
  return (
    <div className={props.card}>
      {props.children}
    </div>
  )
}

export default Carte