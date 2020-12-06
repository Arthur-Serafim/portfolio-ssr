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
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
`

export const BackgroundImage = styled.div`
  background: url("https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80");
  background-size: 100% 100vh;
  opacity: .2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;
`

export const LandingPage = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-family: 'Montserrat';
    letter-spacing: 10px;
    font-size: 75px;
    margin-bottom: 25px;
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
`

export const LandingPageImage = styled.img`
  position: absolute;
  z-index: -1;
  right: 100px;
  bottom: calc(50% - 35vh)
  object-fit: cover;
  border-radius: 10px;
  width: 960px;
  height: 708px;
`