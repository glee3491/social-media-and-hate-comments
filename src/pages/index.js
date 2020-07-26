import React, { useEffect } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

import SEO from '../components/seo'
import Nav from '../components/nav'

const AboutPage = () => {
  useEffect(() => {
    if (typeof window === `undefined`) return null

    const title = document.querySelector('.title')

    setTimeout(() => {
      title.classList.add('show')
    }, 175)

    return () => {
      title.classList.remove('show')
    }
  }, [])

  return (
    <>
      {}
      <SEO
        title="Social Media and Hate Comments"
        description="Social Media Hate Comments, Ethic and Responsibility"
      />

      <div className="about-page">
        <Nav />

        <h1 className="title" data-splitting="">
          Social Media and
          <br /> Hate Coments
        </h1>

        <h2 className="subtitle">Social Media Hate Comments, Ethic and Responsibility</h2>

        <div className="intro">
        <iframe title="introvid" width="789" height="444" src="https://www.youtube.com/embed/hyIb_Mur5Gs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          <p>
            <TransitionLink
              exit={{
                length: 1.25,
                delay: 0,
              }}
              entry={{
                delay: 1.25,
              }}
              to="/chapters"
              className="link-cta"
            >
              Go to Chapters
            </TransitionLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage
