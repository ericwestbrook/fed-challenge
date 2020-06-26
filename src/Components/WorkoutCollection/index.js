import React, { useState, useEffect } from "react"

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
      <img
        className='WorkoutCollection__banner'
        src={props.collection.banner}
        alt={props.collection.title}
      />
    </div>
  )
}

export default WorkoutCollection
