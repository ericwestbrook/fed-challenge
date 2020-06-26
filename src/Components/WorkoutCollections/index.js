import React, { useState, useEffect } from "react"

import WorkoutCollection from "../WorkoutCollection"

import "./styles.scss"

function WorkoutCollections(props) {
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])
  return (
    <div className={`WorkoutCollections ${loaded ? "loaded" : "loading"}`}>
      {props.collections &&
        props.collections.map((collection, index) => (
          <WorkoutCollection collection={collection} key={index} />
        ))}
    </div>
  )
}

export default WorkoutCollections
