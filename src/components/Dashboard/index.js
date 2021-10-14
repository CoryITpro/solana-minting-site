import Navbar from "components/Navbar"
import Hero from "components/Hero"
import SneakPeek from "components/SneakPeek"
import Roadmap from "components/Roadmap"
import Game from "components/Game"
import Team from "components/Team"
import FAQ from "components/FAQ"
import Policy from "components/Policy"
import Footer from "components/Footer"

import "./style.scss"
import Sidebar from "components/Sidebar"

const Dashboard = ({ showSidebar, onHandleSidebar }) => (
  <div className="dashboard">
    <Sidebar showSidebar={showSidebar} onHandleSidebar={onHandleSidebar} />
    <Navbar onHandleSidebar={onHandleSidebar} />
    <Hero />
    <SneakPeek />
    <Roadmap />
    <Game />
    <Team />
    <FAQ />
    <Policy />
    <Footer />
  </div>
)

export default Dashboard
