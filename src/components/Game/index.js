import "./style.scss"
import GameRoadmap from "resources/game_map.png"

const Game = () => (
  <div className="game">
    <div className="title">/// Game Roadmap ///</div>
    <div className="game-title">
      <span>Game Roadmap</span>
    </div>
    <div className="game-roadmap">
      <div className="game-roadmap-wrapper">
        <img src={GameRoadmap} alt="game roadmap" />
      </div>
    </div>
  </div>
)

export default Game
