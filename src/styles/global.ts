import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Futura';
    src: local('Futura'),
    url("/fonts/FuturaRound.ttf") format('woff2'),
    url("/fonts/FuturaRound.ttf") format('woff');
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Futura, sans-serif;
  }
`
