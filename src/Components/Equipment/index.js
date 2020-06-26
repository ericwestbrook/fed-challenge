import React, { useState, useEffect } from "react"

import "./styles.scss"

function WorkoutCollections(props) {
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])
  return (
    <div className={`Equipment ${loaded ? "loaded" : "loading"}`}>
      <h1>Interested in our exciting iFit-enabled equipment?</h1>
      <div className='Equipment__inner'>
        {props.equipment &&
          props.equipment.map((eqItem, index) => (
            <div className='Equipment__item' key={index}>
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
