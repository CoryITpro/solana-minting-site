import { Link } from "react-scroll"
import "./style.scss"

const Sidebar = ({ showSidebar, onHandleSidebar }) => (
  <div
    className={`sidebar flex flex-column${showSidebar ? " sidebar-show" : ""}`}
    onClick={onHandleSidebar}
  >
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"sneakpeek"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      Rarity
    </Link>
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"roadmap"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      Roadmap
    </Link>
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"team"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      Our Team
    </Link>
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"faq"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      FAQ
    </Link>
  </div>
)

export default Sidebar
