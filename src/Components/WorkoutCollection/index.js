import React, { useState, useEffect } from "react"

import iconTimer from "../../Images/icon-timer.svg"
import iconDistance from "../../Images/icon-distance.svg"

import "./styles.scss"

function WorkoutCollection(props) {
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])
  return (
    <div className={`WorkoutCollection ${loaded ? "loaded" : "loading"}`}>
      <div className='WorkoutCollection__banner'>
        <img src={props.collection.banner} alt={props.collection.title} />
      </div>
      <div className='WorkoutCollection__content'>
        <div className='WorkoutCollection__content__title-bar'>
          <span>{props.collection.title}</span>
          <img
            src={props.collection.icon}
            alt={`${props.collection.title} icon`}
          />
        </div>
        <div className='WorkoutCollection__content__metrics-bar'>
          {props.collection.time && (
            <div className='WorkoutCollection__metric WorkoutCollection__metric--time'>
              <img src={iconTimer} alt='Time' />
              <span>{props.collection.time}</span>
            </div>
          )}
          {props.collection.distance && (
            <div className='WorkoutCollection__metric WorkoutCollection__metric--distance'>
              <img src={iconDistance} alt='Distance' />
              <span>{props.collection.distance}</span>
            </div>
          )}
        </div>
        <div className='WorkoutCollection__hover-link'>
          <span>View Details</span>
        </div>
      </div>
    </div>
  )
}

export default WorkoutCollection
