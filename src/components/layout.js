/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { /*useStaticQuery, graphql,*/ Link } from "gatsby"

import sky from '../images/bg-sky.png';
import town7 from '../images/bg-town7.png';
import town6 from '../images/bg-town6.png';
import town5 from '../images/bg-town5.png';
import town3 from '../images/bg-town3.png';
import town4 from '../images/bg-town4.png';
import town2 from '../images/bg-town2.png';
import town1 from '../images/bg-town1.png';
import town0 from '../images/bg-town0.png';
import foreground from '../images/bg-foreground.png';

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="container">
        <div className="bg-images">
          {/* SIMEVILLE.
            Just when you thought this website's payload would be small
            I go and use our old pal, PNG. Yes I know about webp. */}
          <img alt="" className="bg-sky" src={sky} />
          <img alt="" className="bg-town" id="town7" src={town7} />
          <img alt="" className="bg-town" id="town6" src={town6} />
          <img alt="" className="bg-town" id="town5" src={town5} />
          <img alt="" className="bg-town" id="town3" src={town3} />
          <img alt="" className="bg-town" id="town4" src={town4} />
          <img alt="" className="bg-town" id="town2" src={town2} />
          <img alt="" className="bg-town" id="town1" src={town1} />
          <img alt="" className="bg-town" id="town0" src={town0} />
          <img alt="" className="bg-fore" src={foreground} />
          {/*  HA HA! BIRDS!
              Bet you thought they were animated with meowzerscript
              but nay, it is CSS animation twice folded upon themselves.
              See layout.css for a vague explanation  */}
          <div className="BIRD BIRD0"></div>
          <div className="BIRD BIRD1"></div>
          <div className="BIRD BIRD2"></div>
          <div className="BIRD BIRD3"></div>
          <div className="BIRD BIRD4"></div>
          <div className="text">
            <h1 style={{
              animation: "text-fadein 8s ease-in 0s 1"
            }} ><Link to="/">Simon Sarris</Link></h1>

            <div className="main-menu">
              <Link to="/photo/">Photo</Link>
              <Link to="/writing/">Writing</Link>
              <Link to="/about/">About</Link>
              {/* <input id="photo" className="toggle" type="radio" name="menuradio">
                <label for="photo" className="menu-button photo-toggle">photo</label>
                <input id="writing" className="toggle" type="radio" name="menuradio">
                <label for="writing" className="menu-button writing-toggle">writing</label>
                <input id="primary" className="toggle" type="radio" name="menuradio">
                <label for="primary" className="menu-button primary-toggle">work on</label>
                <input id="about" className="toggle" type="radio" name="menuradio">
                <label for="about" className="menu-button about-toggle">about</label> */}
            </div>
              <div className="primary-content">
                <div className="content-inner">
                  <main>{children}</main>
                  <p style={{ fontSize: "90%" }}>
                  <a href="https://twitter.com/simonsarris"><span style={{ fontSize: "110%" }} role="img" aria-label="candle">🕯️</span><em>simonsarris</em></a>
                  </p>
                </div>
              </div>


          </div>
        </div>
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
