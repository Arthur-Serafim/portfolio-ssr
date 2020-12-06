import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;


  h1 {
    font-size: 54px;
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Background = styled.div`
  background: radial-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, 1));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

export const LandingPage = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Montserrat';
    letter-spacing: 10px;
    font-size: 75px;
    margin-bottom: 25px;
  }
`

export const Line = styled.div`
  width: 104px;
  height: 5px;
  border-radius: 25px;
  background: ${props => props.theme.colors.primary};

  &:last-child {
    margin-left: 52px;
  }
`

export const Label = styled.span`
  margin-top: 25px;
  font-family: "Futura";
  line-height: 1.5;
  font-size: 25px;
  letter-spacing: 3px;
  opacity: .75;
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

export const AboutMe = styled.div`
  height: 100vh;
`