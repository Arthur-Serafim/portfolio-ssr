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
  AboutMe,
  Background
} from '../styles/pages/Home'

const Home: React.FC = () => {
  React.useEffect(() => {
  }, [])

  return (
    <Container onScroll={(e: any) => e.preventDefault()}>
      <Head>
        <title>ARTHUR SERAFIM PORTFOLIO</title>
        <meta
            name="description"
            content="Experienced Front End Developer and Software Engineer with a detailed history of collaborating with
            stakeholders and driving exceptional results."
        />
        <link rel="canonical" href="http://arthurserafim.com" />
        <meta property="og:url"                content="http://www.arthurserafim.com" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content="ARTHUR SERAFIM PORTFOLIO" />
        <meta property="og:description"        content="Experienced Front End Developer and Software Engineer with a detailed history of collaborating with stakeholders and driving exceptional results." />
        <meta property="og:image"              content="https://lh4.googleusercontent.com/1y-biI2a6YHSoeYXfq6OTXDH4dj2PThOUvOmVH6hwgZCcwbszJTzsXjjKFw85fxnRjFeRiM9Vrpb1RFHq6ZA=w1920-h942-rw" />
      </Head>
      <Navbar />
      <LandingPage id="e1">
        <h1>
          ARTHUR <br/>
          SERAFIM
        </h1>
        <div>
          <Line />
          <br/>
          <Line />
        </div>
        <Label>
          front end developer / <br/>
          software engineer
        </Label>
        <DeveloperContainer>
          <ScrollDown>
            <span>
              &#8595;
            </span>
          </ScrollDown>
        </DeveloperContainer>
      </LandingPage>
      <AboutMe></AboutMe>
      <Background />
    </Container>
  )
}

export default Home
