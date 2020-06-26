import React, { useState, useEffect } from "react"
// import Select from "react-select"
// import Dropdown from "react-dropdown"

import iconFacebook from "../../Images/icon-facebook.svg"
import iconInstagram from "../../Images/icon-instagram.svg"
import iconPinterest from "../../Images/icon-pinterest.svg"
import iconTwitter from "../../Images/icon-twitter.svg"
import iconYoutube from "../../Images/icon-youtube.svg"

import "./styles.scss"

const socialLinks = [
  {
    name: "Youtube",
    icon: iconYoutube,
    url: "https://www.youtube.com/user/iFitLive",
  },
  {
    name: "Pinterest",
    icon: iconPinterest,
    url: "https://www.pinterest.com/ifit/",
  },
  {
    name: "Facebook",
    icon: iconFacebook,
    url: "https://www.facebook.com/ifit/",
  },
  {
    name: "Twitter",
    icon: iconTwitter,
    url: "https://twitter.com/ifit",
  },
  {
    name: "Instagram",
    icon: iconInstagram,
    url: "https://www.instagram.com/ifit",
  },
]

const languages = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "spanish",
    label: "Spanish",
  },
]

function Footer(props) {
  let [loaded, setLoaded] = useState(false)
  let [selectedLang, setSelectedLang] = useState(
    props.lang ? props.lang : "english"
  )

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])

  const changeLang = (selected) => {
    console.log(selected)
    setSelectedLang(selected)
    if (props.onChangeLang) {
      props.onChangeLang(selected)
    }
  }

  return (
    <div className={`Footer ${loaded ? "loaded" : "loading"}`}>
      <div className='Footer__main-links'>
        {props.links.map((footerLink, i) => (
          <ul key={i}>
            <a href='#'>
              <li>{footerLink.title}</li>
            </a>
            {footerLink.sublinks.map((sublink, ii) => (
              <a key={ii} href='#'>
                <li>{sublink}</li>
              </a>
            ))}
          </ul>
        ))}
      </div>
      <div className='Footer__social-links'>
        {socialLinks.map((socialLink, i) => (
          <a href={socialLink.url} target='_blank' key={i}>
            <img src={socialLink.icon} alt={socialLink.name} />
          </a>
        ))}
      </div>
      <div className='Footer__copyright'>
        <div className='Footer__copyright__lang'>
          <select
            value={selectedLang}
            onChange={(e) => changeLang(e.target.value)}
          >
            {languages.map((lang, i) => (
              <option value={lang.value} key={i}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
        <div className='Footer__copyright__links'>
          <span>&copy; iFit.com. All Rights Reserved.</span>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of Use</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
