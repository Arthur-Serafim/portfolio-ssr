import {
  Navigation,
  NavigationItems,
  NavigationLogo,
  NavigationIcon,
  NavigationLabel
} from "../styles/pages/NavbarStyles";

export default function Navbar({ scrollAnchor }) {
  return (
    <Navigation>
      <NavigationLogo>
        Arthur Serafim
      </NavigationLogo>
      <NavigationItems>
        <NavigationLabel onClick={() => scrollAnchor("#mouseone")}>
          Projects
        </NavigationLabel>
        <NavigationLabel onClick={() => scrollAnchor("#about")}>
          About
        </NavigationLabel>
        <NavigationLabel onClick={() => scrollAnchor("#contact")}>
          Contact
        </NavigationLabel>
        <a href="https://drive.google.com/u/1/uc?id=19Ra4I0YQELRKNcanM6B8nDSq2qbqtq6B&export=download" target="_blank" rel="norel">
          <NavigationLabel>
            Resume
          </NavigationLabel>
        </a>
      </NavigationItems>
    </Navigation>
  )
}