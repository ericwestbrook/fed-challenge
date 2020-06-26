import React, { useState, useEffect } from "react"

import "./styles.scss"

function Footer(props) {
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])
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
      <div className='Footer__social-links'></div>
      <div className='Footer__copyright'></div>
    </div>
  )
}

export default Footer
