import React from 'react'
import '../Styles/BurgerButton.css'


const BurgerButton = (props) => {
  return (

    
    <div
      className={`icon nav-icon-5 ${props.Clicked ? 'open' : ''}`}
      onClick={props.handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

  )
}


export default BurgerButton