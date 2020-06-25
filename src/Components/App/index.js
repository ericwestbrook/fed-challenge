import React from "react"

import Nav from "../Nav"
import Hero from "../Hero"

import fedHero from "../../Images/fed-hero.jpg"
import "./styles.scss"

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero
        title={"The best personal training,\n right in your own home"}
        cta='join iFit Coach'
        image={fedHero}
      />
    </div>
  )
}

export default App
