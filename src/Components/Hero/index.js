import React, { useState, useEffect } from "react"

import "./styles.scss"

function Hero(props) {
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])
  return (
    <div className={`Hero ${loaded ? "loaded" : "loading"}`}>
      {/* <img className='Hero__image' src={props.image} alt={props.title} /> */}
      <div
        className='Hero__image'
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className='Hero__content'>
        {props.title && <span className='Hero__title'>{props.title}</span>}
        {props.cta && <button className='Hero__cta'>{props.cta}</button>}
      </div>
    </div>
  )
}

export default Hero
