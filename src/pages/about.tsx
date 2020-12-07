import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

import {
  Background,
  BackgroundImage,
  DeveloperContainer,
  Label,
  LandingPage,
  Line,
  ScrollDown,
  SeeMore
} from '../styles/pages/Home'
import { useRouter } from 'next/router'
import {
  AboutContainer,
  AboutImage,
  AboutSectionsTitle,
  LeftContainer,
  RightContainer,
  AboutLabel
} from '../styles/pages/AboutStyles'

const Home: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.addEventListener('scroll', function () {
      let el = document.querySelector('#about')

      if (!elementInViewport2(el)) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }, [])

  function handleScrollDown() {
    document
      .querySelector('#about-container')
      .scrollIntoView({ behavior: 'smooth' })
  }

  function elementInViewport2(el) {
    var top = el.offsetTop
    var left = el.offsetLeft
    var width = el.offsetWidth
    var height = el.offsetHeight

    while (el.offsetParent) {
      el = el.offsetParent
      top += el.offsetTop
      left += el.offsetLeft
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    )
  }

  return (
    <>
      <Head>
        <title>About Me | Arthur Guimarães Serafim</title>
        <meta
          name="description"
          content="Arthur is an experienced Front End Developer and Software Engineer with a detailed history of collaborating with
            stakeholders and driving exceptional results."
        />
        <link rel="canonical" href="https://arthurserafim.com/about" />
        <meta property="og:url" content="https://www.arthurserafim.com/about" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Arthur Guimarães Serafim | Portfolio"
        />
        <meta
          property="og:description"
          content="Experienced Front End Developer and Software Engineer with a detailed history of collaborating with stakeholders and driving exceptional results."
        />
        <meta property="og:image" content="https://i.imgur.com/PogqplG.png" />
        <meta
          name="google-site-verification"
          content="rEMDiQIif_fstK8yFKFJSHQl-AgU7fYJh7_K3iApLXk"
        />
      </Head>
      <Navbar fullpageApi active={active} />
      <LandingPage id="about" className="section">
        <h2>ABOUT ME</h2>
        <div>
          <Line />
          <br />
          <Line slot="end" />
        </div>
        <Label>
          I love Novels, Games and <br />
          Technology.
        </Label>
        <SeeMore
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/arthur-serafim-335310188/',
              '_blank'
            )
          }
        >
          Get in touch
        </SeeMore>
        <DeveloperContainer>
          <ScrollDown onClick={handleScrollDown}>
            <span>&#8595;</span>
          </ScrollDown>
        </DeveloperContainer>
      </LandingPage>
      <AboutContainer id="about-container">
        <LeftContainer>
          <AboutSectionsTitle>WHO ARE YOU?</AboutSectionsTitle>
          <AboutLabel>
            Born in <strong>“Belo Horizonte”</strong>, in beautiful Brazil, I grew up using
            the <strong>internet</strong>. Be it by playing videogames or watching Pokemon, I was
            always <strong>connected</strong>. <br /> <br/>
            After being a regular <strong>user</strong> for so long, I decided to take a step
            further and <strong>study deeply</strong> how the internet works. Years later, here I
            am, an <strong>active member</strong> of the developer community.
          </AboutLabel>
        </LeftContainer>
        <RightContainer>
          <AboutImage
            src="https://scontent.fguz1-1.fna.fbcdn.net/v/t1.0-9/117192269_2984489474993341_6769869719844714055_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=y8D_E2_Dq6wAX-w7vIs&_nc_ht=scontent.fguz1-1.fna&oh=4b5833e14d11d51e97ae8b302db418aa&oe=5FF28D52"
            alt="Arthur Serafim Portrait"
          />
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
