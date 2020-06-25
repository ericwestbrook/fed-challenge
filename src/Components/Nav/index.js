import React from "react"

import logo from "../../Images/ifit-coach-logo.svg"

import "./styles.scss"

function Nav() {
  return (
    <div className='Nav'>
      <div className='Nav__inner'>
        <div className='Nav__header'>
          <div className='Nav__link Nav__header__link'>
            <a href='#'>Blog</a>
          </div>
          <div className='Nav__link Nav__header__link'>
            <a href='#'>Nourish</a>
          </div>
          <div className='Nav__link Nav__header__link'>
            <a href='#'>Shop</a>
          </div>
        </div>
        <div className='Nav__main'>
          <div className='Nav__logo'>
            <a href='#'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          <div className='Nav__links'>
            <div className='Nav__link'>
              <a href='#'>Exercise</a>
            </div>
            <div className='Nav__link'>
              <a href='#'>Nutrition</a>
            </div>
            <div className='Nav__link'>
              <a href='#'>Activity</a>
            </div>
            <div className='Nav__link'>
              <a href='#'>Sleep</a>
            </div>
          </div>
          <div className='Nav__sign-up'>
            <button className='Nav__button'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
