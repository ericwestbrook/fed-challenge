import React, { useState, useCallback, useEffect, useRef } from "react"

import "./styles.scss"

function WorkoutCollections(props) {
  let [loaded, setLoaded] = useState(false)
  let [elViewed, setElViewed] = useState(false)

  const elRef = useRef(null)
  const offset = 30

  let handleScroll = useCallback((event) => {
    if (!elRef || !elRef.current) return false
    const top = elRef.current.getBoundingClientRect().top
    if (top + offset >= 0 && top - offset <= window.innerHeight) {
      setElViewed(true)
    }
  }, [])

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
    <div
      className={`Equipment ${loaded ? "loaded" : "loading"} ${
        elViewed ? "viewed" : ""
      }`}
      ref={elRef}
    >
      <h1>Interested in our exciting iFit-enabled equipment?</h1>
      <div className='Equipment__inner'>
        {props.equipment &&
          props.equipment.map((eqItem, index) => (
            <div
              className={`Equipment__item Equipment__item--${index}`}
              key={index}
            >
              <img
                className='Equipment__image'
                src={eqItem.image}
                alt={eqItem.title}
              />
              <h2 className='Equipment__title'>{eqItem.title}</h2>
            </div>
          ))}
      </div>
    </div>
  )
}

export default WorkoutCollections
