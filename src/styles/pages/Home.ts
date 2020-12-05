import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
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

export const LandingPage = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, 1));

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
  background: ${props => props.theme.colors.primary};;

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
  right: 100px;
  opacity: .5;
  animation: float 5s infinite;

  & svg {
    width: 750px;
  }

  @keyframes float {
    0% {
      transform: translateY(-25px);
    }

    50% {
      transform: translateY(25px);
    }

    100% {
      transform: translateY(-25px);
    }
  }
`