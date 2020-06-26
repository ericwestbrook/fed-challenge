import React from "react"

import Nav from "../Nav"
import Hero from "../Hero"
import Reviews from "../Reviews"

import fedHero from "../../Images/fed-hero.jpg"
import gearJunkieLogo from "../../Images/gear-junkie-logo.svg"
import wiredLogo from "../../Images/wired-logo.svg"
import mashableLogo from "../../Images/mashable-logo.svg"

import "./styles.scss"

let reviews = [
  {
    reviewer: "Gear Junkie",
    image: gearJunkieLogo,
    review:
      "You focus on putting in the work, and the technology handles the rest.",
  },
  {
    reviewer: "Wired",
    image: wiredLogo,
    review: "Literally transports you from home to wherever you choose to run.",
  },
  {
    reviewer: "Mashable",
    image: mashableLogo,
    review: "Breathes new life into a tired, old running routine.",
  },
]

// Duplicate reviews for carousel sake
reviews = reviews.concat(reviews)

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='App__content'>
        <Hero
          title={"The best personal training,\n right in your own home"}
          cta='join iFit Coach'
          image={fedHero}
        />
        <Reviews reviews={reviews} />
      </div>
    </div>
  )
}

export default App
