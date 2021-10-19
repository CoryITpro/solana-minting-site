import { useState, useEffect } from "react"
import { Roadmaps } from "constants/roadmap"
import RoadmapFrame from "./Frame"
import CloudPlanet from "resources/cloud-planet.png"
import Cloud from "resources/cloud.png"
import "./style.scss"

const generateRoadmap = (changeRoadmap) =>
  Roadmaps.map((data, index) => (
    <div key={index} className="roadmap-item">
      {changeRoadmap ? (
        <>
          <div className="roadmap-item-milestones flex">
            <div className="roadmap-item-milestones-line"></div>
          </div>
          <div className="show flex flex-column">
            <RoadmapFrame>
              {data.title}
              {data.content.map((data, index) => (
                <span key={index}>{data}</span>
              ))}
            </RoadmapFrame>
          </div>
        </>
      ) : (
        <>
          <div className={`${index % 2 ? "" : "show flex flex-column"}`}>
            <RoadmapFrame>
              {data.title}
              {data.content.map((data, index) => (
                <span key={index}>{data}</span>
              ))}
            </RoadmapFrame>
          </div>
          <div className="roadmap-item-milestones flex">
            <div className="roadmap-item-milestones-line"></div>
          </div>
          <div className={`${index % 2 ? "show flex flex-column" : ""}`}>
            <RoadmapFrame>
              {data.title}
              {data.content.map((data, index) => (
                <span key={index}>{data}</span>
              ))}
            </RoadmapFrame>
          </div>
        </>
      )}
    </div>
  ))

const Roadmap = () => {
  const [changeRoadmap, setChangeRoadmap] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth)

    return () => window.removeEventListener("resize", getWindowWidth)
  }, [])

  const getWindowWidth = () => {
    const { innerWidth: width } = window

    if (width > 768) {
      setChangeRoadmap(false)
    } else {
      setChangeRoadmap(true)
    }
  }

  return (
    <div className="roadmap">
      <div className="roadmap-decoration">
        <img src={CloudPlanet} alt="decoration" />
      </div>
      <div className="roadmap-title">/// The Release ///</div>
      <div className="roadmap-wrapper">{generateRoadmap(changeRoadmap)}</div>
      <div className="roadmap-decoration-bottom">
        <img src={Cloud} alt="decoration" />
      </div>
    </div>
  )
}

export default Roadmap
