import React, { useCallback, useRef, useState, useEffect } from "react"

import "./styles.scss"

function Hero(props) {
  let [loaded, setLoaded] = useState(false)

  const elRef = useRef(null)
  const offset = 0

  let handleScroll = useCallback(
    (event) => {
      if (!elRef || !elRef.current) return false
      const top = elRef.current.getBoundingClientRect().bottom
      if (top + offset >= 0 && top - offset <= window.innerHeight) {
        if (props.setHeroInView) {
          props.setHeroInView(true)
        }
      } else {
        if (props.setHeroInView) {
          props.setHeroInView(false)
        }
      }
    },
    [props]
  )

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className={`Hero ${loaded ? "loaded" : "loading"}`} ref={elRef}>
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
