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
        title="Principles of Wealth .net"
        description="A summary of Naval Ravikant’s tweetstorms and podcast"
      />

      <div className="about-page">
        <Nav />

        <h1 className="title" data-splitting="">
          Principles
          <br /> of Wealth
          <br /> .net
        </h1>

        <h2 className="subtitle">A summary of Naval Ravikant’s tweetstorms and podcasts</h2>

        <div className="intro">
          <p>
            This site is a summary of Naval's{' '}
            <a
              href="https://twitter.com/naval/status/1002103360646823936"
              target="_blank"
              rel="noopener noreferrer"
            >
              tweetstorm
            </a>{' '}
            and{' '}
            <a href="https://nav.al/how-to-get-rich" target="_blank" rel="noopener noreferrer">
              podcast 'how to get rich'
            </a>
            . Which started out as several tweetstorms, the podcast dove deep into each tweet.
          </p>
          <p>
            But Podcasts are slow to consume. Reading is faster than listening and a summary is even
            faster.
          </p>
          <p>
            I wrote this out of my own interest and wanted to showcase my skills as a designer and
            front-end developer.
          </p>
          <p>
            <a href="https://flowen.me/" target="_blank" rel="noopener noreferrer">
              Made by Rou Hun Fan
            </a>
          </p>
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
