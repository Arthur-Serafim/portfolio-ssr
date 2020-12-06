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
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all .4s;

    &:hover {
      opacity: .6;
    }
  }

  .section {
    box-sizing: border-box;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
  }
`
