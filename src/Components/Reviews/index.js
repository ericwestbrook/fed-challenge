import React, { useState, useEffect } from "react"

import Review from "../Review"

import "./styles.scss"

function Reviews(props) {
  let [loaded, setLoaded] = useState(false)
  let [animating, setAnimating] = useState(false)
  let [firstItem, setFirstItem] = useState(0)
  let [displayList, setDisplayList] = useState(props.reviews)

  const animationDelay = 1000

  const onBackwardClick = () => {
    if (!animating) {
      setAnimating(true)
      const nextFirstItem =
        firstItem === 0 ? props.reviews.length - 1 : firstItem - 1
      console.log(nextFirstItem)
      setTimeout(() => {
        setAnimating(false)
        setFirstItem(nextFirstItem)
        setupDisplayList(nextFirstItem)
      }, animationDelay)
    }
  }

  const onForwardClick = () => {
    if (!animating) {
      setAnimating(true)
      const nextFirstItem =
        firstItem === props.reviews.length - 1 ? 0 : firstItem + 1
      console.log(nextFirstItem)
      setTimeout(() => {
        setAnimating(false)
        setFirstItem(nextFirstItem)
        setupDisplayList(nextFirstItem)
      }, animationDelay)
    }
  }

  const setupDisplayList = (firstItem) => {
    const reviewsLength = props.reviews.length
    let indexes = []
    const displayLength = 7 // 3 in view + 2 before + 2 after
    let t = firstItem - 3
    if (t < 0) {
      t = displayLength + t - 1
    }
    for (var i = 0; i < displayLength; i++) {
      if (t < reviewsLength - 1) {
        t++
      } else {
        t = 0
      }
      indexes[i] = t
    }

    let newDisplayList = []
    indexes.forEach((index, i) => {
      newDisplayList[i] = props.reviews[index]
    })
    console.log("firstItem: ", firstItem)
    console.log("newDisplayList: ", newDisplayList)
    setDisplayList(newDisplayList)
  }

  useEffect(() => {
    setupDisplayList(0)
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])

  return (
    <div className={`Reviews ${loaded ? "loaded" : "loading"}`}>
      <div className='Reviews__content'>
        <div className='Reviews__content__inner'>
          {displayList.map((review, i) => (
            <Review review={review} key={i} />
          ))}
        </div>
      </div>
      <div className='Reviews__controls'>
        <div
          className='Reviews__control Reviews__control--backward'
          onClick={() => onBackwardClick()}
        >
          <div className='Reviews__control__arrow'></div>
        </div>
        <div
          className='Reviews__control Reviews__control--forward'
          onClick={() => onForwardClick()}
        >
          <div className='Reviews__control__arrow'></div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
