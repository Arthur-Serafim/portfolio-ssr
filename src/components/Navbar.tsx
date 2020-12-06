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
        <NavigationLabel onClick={() => scrollAnchor("#about")}>
          About
        </NavigationLabel>
        <a href="https://github.com/Arthur-Serafim" target="_blank" rel="norel">
          <NavigationLabel>
            Contact
          </NavigationLabel>
        </a>
        <a href="https://github.com/Arthur-Serafim" target="_blank" rel="norel">
          <NavigationLabel>
            Resume
          </NavigationLabel>
        </a>
        <a href="https://www.linkedin.com/in/arthur-serafim-335310188/" target="_blank" rel="norel">
          <NavigationIcon className="fab fa-linkedin-in" />
        </a>
        <a href="https://github.com/Arthur-Serafim" target="_blank" rel="norel">
          <NavigationIcon className="fab fa-github" />
        </a>
      </NavigationItems>
    </Navigation>
  )
}