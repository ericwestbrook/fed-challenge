import React, { useState, useEffect } from "react"

import "./styles.scss"

function Review(props) {
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])
  return (
    <div className={`Review ${loaded ? "loaded" : "loading"}`}>
      <img
        className='Review__logo'
        src={props.review.image}
        alt={props.review.reviewer}
      />
      <span className='Review__text'>“{props.review.review}”</span>
    </div>
  )
}

export default Review
