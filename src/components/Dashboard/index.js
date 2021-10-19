import Navbar from "components/Navbar"
import Hero from "components/Hero"
import Gallery from "components/Gallery"
import SneakPeek from "components/SneakPeek"
import Roadmap from "components/Roadmap"
import Game from "components/Game"
import Team from "components/Team"
import FAQ from "components/FAQ"

import "./style.scss"
import Sidebar from "components/Sidebar"

const Dashboard = ({ showSidebar, onHandleSidebar }) => (
  <div className="dashboard">
    <Sidebar showSidebar={showSidebar} onHandleSidebar={onHandleSidebar} />
    <Navbar onHandleSidebar={onHandleSidebar} />
    <Hero />
    <Gallery />
    <SneakPeek />
    <Roadmap />
    <Game />
    <Team />
    <FAQ />
  </div>
)

export default Dashboard
