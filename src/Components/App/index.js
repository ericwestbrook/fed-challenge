import React, { useState } from "react"

import Nav from "../Nav"
import Hero from "../Hero"
import Reviews from "../Reviews"
import WorkoutCollections from "../WorkoutCollections"
import Equipment from "../Equipment"
import Footer from "../Footer"

import fedHero from "../../Images/fed-hero.jpg"
import gearJunkieLogo from "../../Images/gear-junkie-logo.svg"
import wiredLogo from "../../Images/wired-logo.svg"
import mashableLogo from "../../Images/mashable-logo.svg"
import wcBanner1 from "../../Images/wcBanner1.jpg"
import wcBanner2 from "../../Images/wcBanner2.jpg"
import wcBanner3 from "../../Images/wcBanner3.jpg"
import wcBanner4 from "../../Images/wcBanner4.jpg"
import wcBanner5 from "../../Images/wcBanner5.jpg"
import wcBanner6 from "../../Images/wcBanner6.jpg"
import wcBanner7 from "../../Images/wcBanner7.jpg"
import wcBanner8 from "../../Images/wcBanner8.jpg"
import wcIcon1 from "../../Images/wcIcon1.png"
import wcIcon2 from "../../Images/wcIcon2.png"
import wcIcon3 from "../../Images/wcIcon3.png"
import wcIcon4 from "../../Images/wcIcon4.png"
import wcIcon5 from "../../Images/wcIcon5.png"
import wcIcon6 from "../../Images/wcIcon6.png"
import wcIcon7 from "../../Images/wcIcon7.png"
import wcIcon8 from "../../Images/wcIcon8.png"
import treadmillsImg from "../../Images/treadmills.jpg"
import bikesImg from "../../Images/bikes.jpg"
import ellipticalsImg from "../../Images/ellipticals.jpg"
import strengthImg from "../../Images/strength.jpg"

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

const workoutCollections = [
  {
    title: "Lake Inniscarra, Ireland—Pyramid",
    banner: wcBanner1,
    icon: wcIcon1,
    time: "30:53",
    distance: 6248,
    length: null,
  },
  {
    title: "Performance Series",
    banner: wcBanner2,
    icon: wcIcon2,
    time: null,
    distance: null,
    length: 9,
  },
  {
    title: "Slow Pulls and Fast Intervals",
    banner: wcBanner3,
    icon: wcIcon3,
    time: "44:13",
    distance: 9948,
    length: null,
  },
  {
    title: "20 Minutes to Toned",
    banner: wcBanner4,
    icon: wcIcon4,
    time: null,
    distance: null,
    length: 12,
  },
  {
    title: "Charles Race, Boston, Massachusetts",
    banner: wcBanner5,
    icon: wcIcon5,
    time: "36:22",
    distance: 8648,
    length: null,
  },
  {
    title: "Full-Body HIIT Series",
    banner: wcBanner6,
    icon: wcIcon6,
    time: null,
    distance: null,
    length: 12,
  },
  {
    title: "Kafue River, Zambia—Power Stroke Pyramid",
    banner: wcBanner7,
    icon: wcIcon7,
    time: "22:22",
    distance: 4660,
    length: null,
  },
  {
    title: "Shred & Burn Series",
    banner: wcBanner8,
    icon: wcIcon8,
    time: null,
    distance: null,
    length: 16,
  },
]

const equipment = [
  {
    title: "Treadmills",
    image: treadmillsImg,
  },
  {
    title: "Bikes",
    image: bikesImg,
  },
  {
    title: "Ellipticals",
    image: ellipticalsImg,
  },
  {
    title: "Strength",
    image: strengthImg,
  },
]

const footerLinks = [
  {
    title: "Company",
    sublinks: ["About", "Contact Us", "Careers"],
  },
  {
    title: "Account",
    sublinks: ["Log In", "Create Account"],
  },
  {
    title: "Support",
    sublinks: ["Help Center", "Accessibility"],
  },
]

function App() {
  let [heroInView, setHeroInView] = useState(true)

  return (
    <div className='App'>
      <Nav heroInView={heroInView} />
      <div className='App__content'>
        <Hero
          title={"The best personal training,\n right in your own home"}
          cta='join iFit Coach'
          image={fedHero}
          setHeroInView={setHeroInView}
        />
        <Reviews reviews={reviews} />
        <WorkoutCollections collections={workoutCollections} />
        <Equipment equipment={equipment} />
        <Footer links={footerLinks} />
      </div>
    </div>
  )
}

export default App
