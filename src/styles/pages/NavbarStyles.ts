import styled from 'styled-components'

export const Navigation = styled.nav`
  box-sizing: border-box;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const NavigationLogo = styled.span`
  transition: all .4s;
  cursor: pointer;
  font-size: 28px;

  &:hover {
    opacity: .6;
  }
`

export const NavigationItems = styled.ul`
  display: flex;
  align-items: center;
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
`