import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

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
  LandingPageImage
} from '../styles/pages/Home'
import { NavigationIcon } from '../styles/pages/NavbarStyles'

const Home: React.FC = () => {
  function scrollIntoView(id: string) {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <Head>
        <title>ARTHUR SERAFIM PORTFOLIO</title>
        <meta
          name="description"
          content="Experienced Front End Developer and Software Engineer with a detailed history of collaborating with
            stakeholders and driving exceptional results."
        />
        <link rel="canonical" href="http://arthurserafim.com" />
        <meta property="og:url" content="http://www.arthurserafim.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ARTHUR SERAFIM PORTFOLIO" />
        <meta
          property="og:description"
          content="Experienced Front End Developer and Software Engineer with a detailed history of collaborating with stakeholders and driving exceptional results."
        />
        <meta
          property="og:image"
          content="https://lh4.googleusercontent.com/1y-biI2a6YHSoeYXfq6OTXDH4dj2PThOUvOmVH6hwgZCcwbszJTzsXjjKFw85fxnRjFeRiM9Vrpb1RFHq6ZA=w1920-h942-rw"
        />
      </Head>
      <Navbar scrollAnchor={scrollIntoView} />
      <LandingPage>
        <h1>
          ARTHUR <br />
          SERAFIM
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
          <ScrollDown onClick={() => scrollIntoView('#mouseone')}>
            <span>&#8595;</span>
          </ScrollDown>
        </DeveloperContainer>
      </LandingPage>
      <LandingPage id="mouseone">
        <h1>
          MOUSE ONE <br /> GAMING
        </h1>
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
        <LandingPageImage src="https://www.awesomescreenshot.com/image/1643925/5769265-2fcde824b5fe4cb5e1e42d5102024f0f.png" alt="MouseOne"/>
      </LandingPage>
      <LandingPage id="mouseone">
        <h1>
          GM-ROUTING
        </h1>
        <div>
          <Line />
          <br />
          <Line slot="end" />
        </div>
        <Label>
          Routing software for delivery <br/> optimization
        </Label>
        <SeeMore>See case study</SeeMore>
      </LandingPage>
      <LandingPage id="about">
        <h1>ABOUT ME</h1>
        <div>
          <Line />
          <br />
          <Line slot="end" />
        </div>
        <Label>
          I love Novels, Games and <br />
          Technology
        </Label>
        <SeeMore>Show me more</SeeMore>
      </LandingPage>
      <LandingPage id="contact">
        <h1>GET IN TOUCH</h1>
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
      <Background />
      <BackgroundImage />
    </Container>
  )
}

export default Home
