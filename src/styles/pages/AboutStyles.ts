import styled from 'styled-components'

export const AboutContainer = styled.div`
  box-sizing: border-box;
  padding: 200px;
  width: 100%;
  height: max-content;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
  grid-gap: 250px;
  color: #35354e;

  @media only screen and (max-width: 1600px) {
    padding: 200px 150px;
    grid-gap: 200px;
  }

  @media only screen and (max-width: 1300px) {
    padding: 100px;
    grid-gap: 100px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 75px;
    grid-gap: 75px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
  }

  @media only screen and (max-width: 500px) {
    padding: 50px;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  object-fit: cover;
  max-height: 500px;

  @media only screen and (max-width: 900px) {
    width: 75%;
    height: 100%;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

export const AboutSectionsTitle = styled.h2`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;

  @media only screen and (max-width: 1300px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 24px;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AboutLabel = styled.p`
  margin-top: 25px;
  font-family: 'Futura';
  line-height: 1.5;
  font-size: 22px;
  letter-spacing: 3px;
  opacity: 0.75;
  font-weight: 400;

  @media only screen and (max-width: 1300px) {
    font-size: 18px !important;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px !important;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px !important;
  }
`

export const AboutSkillLabel = styled.p`
  font-family: 'Futura';
  line-height: 1.5;
  font-size: 22px;
  letter-spacing: 3px;
  opacity: 0.75;
  font-weight: 400;

  @media only screen and (max-width: 1300px) {
    font-size: 18px !important;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px !important;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px !important;
  }
`

export const SkillsContainer = styled.div`
  box-sizing: border-box;
  padding: 200px;
  padding-top: 0;
  width: 100%;
  background: #fff;
  color: #35354e;

  @media only screen and (max-width: 1600px) {
    padding: 150px;
    padding-top: 0;
  }

  @media only screen and (max-width: 1300px) {
    padding: 100px;
    padding-top: 0;
  }

  @media only screen and (max-width: 1000px) {
    padding: 75px;
    padding-top: 0;
  }

  @media only screen and (max-width: 500px) {
    padding: 50px;
    padding-top: 0;
  }
`

export const AboutSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;

  & li {
    margin-right: 25px;
  }
`

export const AboutSkillsCaller = styled.h3`
  margin-top: 25px;
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 2px solid #35354e;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding-bottom: 5px;

  &:first-of-type {
    margin-top: 50px;
  }
`
