import React from 'react'

const miBotonera = ({nav, navegation}) => {
  return (
    <div className="bars" onClick={navegation}>        
      <span className={`bar ${nav && "barTop"}`}></span>
      <span className={`bar ${nav && "barMid"}`}></span>
      <span className={`bar ${nav && "barBottom"}`}></span>
    </div>
  )
}

export default miBotonera
