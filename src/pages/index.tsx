import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Link } from 'react-scroll'
import ReactFullpage from '@fullpage/react-fullpage'

import {
  Container,
  LandingPage,
  Line,
  Label,
  DeveloperContainer,
  ScrollDown,
  SeeMore,
  Background,
  BackgroundImage,
} from '../styles/pages/Home'
import { NavigationIcon } from '../styles/pages/NavbarStyles'

const anchors = ['Home', 'About', 'MouseOne', 'GM-Routing', 'Contact']

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Arthur Guimarães Serafim | Portfolio</title>
        <meta
          name="description"
          content="Arthur is an experienced Front End Developer and Software Engineer with a detailed history of collaborating with
            stakeholders and driving exceptional results."
        />
        <link rel="canonical" href="https://arthurserafim.com" />
        <meta property="og:url" content="https://www.arthurserafim.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Arthur Guimarães Serafim | Portfolio" />
        <meta
          property="og:description"
          content="Experienced Front End Developer and Software Engineer with a detailed history of collaborating with stakeholders and driving exceptional results."
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/PogqplG.png"
        />
      </Head>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        render={state => {
          return (
            <>
              <Navbar fullpageApi={state.fullpageApi}/>
              <LandingPage className="section">
                <h1>
                  <strong>
                    ARTHUR <br />
                    SERAFIM
                  </strong>
                </h1>
                <div>
                  <Line />
                  <br />
                  <Line slot="end" />
                </div>
                <Label>
                  front end developer / <br />
                  software engineer
                </Label>
                <DeveloperContainer>
                  <ScrollDown
                    onClick={() => state.fullpageApi.moveTo('About', 2)}
                  >
                    <span>&#8595;</span>
                  </ScrollDown>
                </DeveloperContainer>
              </LandingPage>
              <LandingPage id="about" className="section">
                <h2>ABOUT ME</h2>
                <div>
                  <Line />
                  <br />
                  <Line slot="end" />
                </div>
                <Label>
                  I love Novels, Games and <br/>
                  Technology.
                </Label>
                <SeeMore>Show me more</SeeMore>
              </LandingPage>
              <LandingPage id="projects" className="section">
                <h2>
                  MOUSE ONE <br /> GAMING
                </h2>
                <div>
                  <Line />
                  <br />
                  <Line slot="end" />
                </div>
                <Label>
                  E-commerce, blog and <br />
                  landing page
                </Label>
                <SeeMore>See case study</SeeMore>
              </LandingPage>
              <LandingPage id="projects" className="section">
                <h2>GM-ROUTING</h2>
                <div>
                  <Line />
                  <br />
                  <Line slot="end" />
                </div>
                <Label>
                  Routing software for delivery <br /> optimization
                </Label>
                <SeeMore>See case study</SeeMore>
              </LandingPage>
              <LandingPage id="contact" className="section">
                <h2>GET IN TOUCH</h2>
                <div>
                  <Line />
                  <br />
                  <Line slot="end" />
                </div>
                <Label>
                  <a href="mailto:arthur@dev.net.br">arthur@dev.net.br</a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/arthur-serafim-335310188/"
                    target="_blank"
                    rel="norel"
                  >
                    <NavigationIcon
                      className="fab fa-linkedin-in"
                      style={{ marginLeft: 0, marginTop: '25px' }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/arthur.serafim.12/"
                    target="_blank"
                    rel="norel"
                  >
                    <NavigationIcon
                      className="fab fa-instagram"
                      style={{ marginTop: '25px' }}
                    />
                  </a>
                </Label>
              </LandingPage>
            </>
          )
        }}
      />
      <Background />
      <BackgroundImage src="https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80" alt="Arthur's portfolio background" title="Arthur's portfolio background" />
    </Container>
  )
}

export default Home
