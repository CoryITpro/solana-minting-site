import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

const Navbar = ({ onHandleSidebar }) => (
  <div className="navbar flex">
    <div className="navbar-logo">CLGs</div>
    <div className="navbar-wrapper flex">
      <div className="navbar-links">
        <Link
          className="navbar-links-anchor"
          activeClass="active"
          to={"sneakpeek"}
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
        >
          Rarity
        </Link>
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
      </div>
      <div className="navbar-social">
        <a
          aria-label="twitter"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          aria-label="discord"
          href="https://discord.gg/asdf"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <FontAwesomeIcon icon={faBars} onClick={onHandleSidebar} />
      </div>
    </div>
  </div>
)

export default Navbar
