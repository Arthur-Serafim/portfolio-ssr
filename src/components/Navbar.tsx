import {
  Navigation,
  NavigationItems,
  NavigationLogo,
  NavigationIcon,
} from "../styles/pages/NavbarStyles";

export default function Navbar() {
  return (
    <Navigation>
      <NavigationLogo>
        Arthur Serafim
      </NavigationLogo>
      <NavigationItems>
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