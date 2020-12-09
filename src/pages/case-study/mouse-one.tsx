import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar'

import {
  Background,
  BackgroundImage,
  DeveloperContainer,
  Label,
  LandingPage,
  Line,
  ScrollDown
} from '../../styles/pages/Home'
import {
  AboutContainer,
  AboutImage,
  AboutLabel,
  AboutSectionsTitle,
  AboutSkillLabel,
  AboutSkills,
  AboutSkillsCaller,
  LeftContainer,
  RightContainer
} from '../../styles/pages/AboutStyles'
import {
  CaseStudyImage,
  CaseStudyList
} from '../../styles/pages/CaseStudyStyles'

const Home: React.FC = () => {
  function handleScrollDown() {
    document
      .querySelector('#mouseone-container')
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Mouse One Gaming | Case Study</title>
        <meta
          name="description"
          content="Arthur is an experienced Front End Developer and Software Engineer with a detailed history of collaborating with
            stakeholders and driving exceptional results."
        />
        <link rel="canonical" href="https://arthurserafim.com/mouseone" />
        <meta
          property="og:url"
          content="https://www.arthurserafim.com/mouseone"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Mouse One Gaming | Case Study" />
        <meta
          property="og:description"
          content="MouseOne creates gaming products with a focus on performance, reliability & aesthetic design."
        />
        <meta
          property="og:image"
          content="https://www.awesomescreenshot.com/image/1643925/5775635-1019ad4acc948ca83cfb1fc094c330af.png"
        />
        <meta
          name="google-site-verification"
          content="rEMDiQIif_fstK8yFKFJSHQl-AgU7fYJh7_K3iApLXk"
        />
      </Head>
      <Navbar fullpageApi />
      <LandingPage id="mouseone" className="section">
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
        <DeveloperContainer>
          <ScrollDown onClick={handleScrollDown}>
            <span>&#8595;</span>
          </ScrollDown>
        </DeveloperContainer>
      </LandingPage>
      <AboutContainer id="mouseone-container">
        <LeftContainer style={{ justifyContent: 'flex-start' }}>
          <a href="https://mouseonegaming.com" target="_blank" rel="norel">
            <AboutSectionsTitle>MOUSE ONE GAMING</AboutSectionsTitle>
          </a>
          <AboutLabel>
            Mouse One Game is a gaming peripherals company that needed to boost
            their online presence. For that, I developed them a complete
            website, that now serves as their lead caption, e-commerce, and
            blogging portal.
          </AboutLabel>
          <AboutSkillsCaller>Features Implemented</AboutSkillsCaller>
          <CaseStudyList>
            <li>
              <AboutSkillLabel>
                Multi-themed responsive website.
              </AboutSkillLabel>
            </li>
            <li>
              <AboutSkillLabel>
                Shopify store-front API integration for the E-Commerce section
                of the website.
              </AboutSkillLabel>
            </li>
            <li>
              <AboutSkillLabel>
                Complete blogging integration with the WordPress API.
              </AboutSkillLabel>
            </li>
          </CaseStudyList>
          <AboutSkillsCaller>Challenges Faced</AboutSkillsCaller>
          <AboutLabel>
            This application went from a simple landing page to now a <strong>complete
            portal</strong> with e-commerce and blogging features. This sudden need to
            change made the entire <strong>architectural process</strong> more complex but was
            handled with expertise, and now serves <strong>thousands of customers</strong>.
          </AboutLabel>
        </LeftContainer>
        <RightContainer>
          <a href="https://mouseonegaming.com" target="_blank" rel="norel">
            <CaseStudyImage
              src="https://www.awesomescreenshot.com/image/1643925/5781191-d0f574dd533662a39c39eeb9236f3ba5.png"
              alt="Mouse one landing page"
            />
          </a>
        </RightContainer>
      </AboutContainer>
      <Background />
      <BackgroundImage
        src="https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80"
        alt="Arthur's portfolio background"
        title="Arthur's portfolio background"
      />
    </>
  )
}

export default Home
