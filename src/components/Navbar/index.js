import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import LOGO from "resources/logo.png"
import "./style.scss"

const Navbar = ({ onHandleSidebar }) => (
  <div className="navbar flex">
    <div className="navbar-logo">
      <img src={LOGO} alt="logo" />
      CLGs
    </div>
    <div className="navbar-wrapper flex">
      <div className="navbar-links flex">
        <Link
          className="navbar-links-anchor"
          activeClass="active"
          to={"roadmap"}
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
        >
          Roadmap
        </Link>
        <Link
          className="navbar-links-anchor"
          activeClass="active"
          to={"game"}
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
        >
          The Game
        </Link>
        <Link
          className="navbar-links-anchor"
          activeClass="active"
          to={"team"}
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
        >
          Our Team
        </Link>
        <Link
          className="navbar-links-anchor"
          activeClass="active"
          to={"faq"}
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
        >
          FAQ
        </Link>
        <a
          className="navbar-links-discord"
          aria-label="discord"
          href="https://discord.gg/asdf"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
      </div>
      <div className="navbar-social">
        <FontAwesomeIcon icon={faBars} onClick={onHandleSidebar} />
      </div>
    </div>
  </div>
)

export default Navbar