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
  BackgroundImage
} from '../styles/pages/Home'

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
      <Navbar scrollAnchor={scrollIntoView}/>
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
          <ScrollDown onClick={() => scrollIntoView("#about")}>
            <span>&#8595;</span>
          </ScrollDown>
        </DeveloperContainer>
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
      <Background />
      <BackgroundImage />
    </Container>
  )
}

export default Home
