import styled from 'styled-components'

export const Navigation = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    position: absolute;
  }
`

export const NavigationLogo = styled.h3`
  transition: all .4s;
  cursor: pointer;
  font-size: 28px;
  font-weight: 400;

  &:hover {
    opacity: .6;
  }

  @media only screen and (max-width: 900px) {
    font-size: 22px !important;
  }
`

export const NavigationItems = styled.ul`
  display: flex;
  align-items: center;
  z-index: 1;

  @media only screen and (max-width: 900px) {
    font-size: 22px !important;
  }
`

export const NavigationIcon = styled.i`
  font-size: 22px;
  cursor: pointer;
  transition: all .4s;
  margin-left: 25px;
  color: white;

  &:hover {
    opacity: .6;
  }
`

export const NavigationLabel = styled.span`
  font-size: 22px;
  cursor: pointer;
  transition: all .4s;
  margin-left: 25px;
  color: white;

  &:hover {
    opacity: .6;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px !important;
  }

  @media only screen and (max-width: 600px) {
    &:not(:last-child) {
      display: none;
    }
  }
`