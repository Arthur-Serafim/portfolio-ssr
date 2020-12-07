import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Background = styled.div`
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
`

export const BackgroundImage = styled.img`
  background-size: cover;
  width: 100%;
  height: 100vh;
  opacity: .2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;
`

export const LandingPage = styled.div`
  box-sizing: border-box;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1,
  h2 {
    font-family: 'Montserrat';
    letter-spacing: 10px;
    font-size: 62px;
    margin-bottom: 25px;

    @media only screen and (max-width: 900px) {
      font-size: 42px;
    }

    @media only screen and (max-width: 500px) {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 50px;
  }
`

export const Line = styled.div`
  width: 104px;
  height: 3px;
  border-radius: 25px;
  background: ${props => props.theme.colors.primary};

  ${props => props.slot === 'end' && (`
    margin-left: 52px;
  `)}

  @media only screen and (max-width: 900px) {
    width: 70px;

    ${props => props.slot === 'end' && (`
      margin-left: 35px;
    `)}
  }
`

export const Label = styled.p`
  margin-top: 25px;
  font-family: "Futura";
  line-height: 1.5;
  font-size: 25px;
  letter-spacing: 3px;
  opacity: .75;
  font-weight: 400;

  @media only screen and (max-width: 900px) {
    font-size: 18px !important;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px !important;
  }
`

export const DeveloperContainer = styled.div`
  position: absolute;
  bottom: 25px;
  right: calc(50% - 18px);
  opacity: .5;

  & svg {
    width: 750px;
  }
`

export const ScrollDown = styled.div `
  width: 36px;
  height: 75px;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  transition: all .4s;

  &:hover {
    background: rgba(0, 0, 0, .4)
  }

  span {
    animation: float 3s infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(-5px);
    }
  }
`

export const SeeMore = styled.button`
  box-shadow: none;
  border: none;
  display: block;
  background: ${props => props.theme.colors.primary};
  color: white;
  width: max-content;
  margin-top: 25px;
  padding: 10px 25px;
  border-radius: 25px;
  font-family: "Futura";
  font-size: 20px;
  cursor: pointer;
  transition: all .4s;
  outline: none;

  &:hover {
    transform: scale(1.02)
  }

  &:active {
    transform: scale(1)
  }

  @media only screen and (max-width: 500px) {
    font-size: 16px;
    padding: 7px 20px;
  }
`
