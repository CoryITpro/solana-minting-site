import { useState, useEffect } from "react"
import { Roadmaps } from "constants/roadmap"
import "./style.scss"

const generateRoadmap = (changeRoadmap) =>
  Roadmaps.map((data, index) => (
    <div key={index} className="roadmap-item">
      {changeRoadmap ? (
        <>
          <div className="roadmap-item-milestones flex">
            <div className="roadmap-item-milestones-icon flex flex-column"></div>
            <div className="roadmap-item-milestones-line"></div>
          </div>
          <div className="show flex flex-column">
            {data.title}
            {data.content.map((data, index) => (
              <span key={index}>{data}</span>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={`${index % 2 ? "" : "show flex flex-column"}`}>
            {data.title}
            {data.content.map((data, index) => (
              <span key={index}>{data}</span>
            ))}
          </div>
          <div className="roadmap-item-milestones flex">
            <div className="roadmap-item-milestones-icon flex flex-column"></div>
            <div className="roadmap-item-milestones-line"></div>
          </div>
          <div className={`${index % 2 ? "show flex flex-column" : ""}`}>
            {data.title}
            {data.content.map((data, index) => (
              <span key={index}>{data}</span>
            ))}
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
      <div className="roadmap-title">Roadmap</div>
      <div className="roadmap-wrapper">{generateRoadmap(changeRoadmap)}</div>
    </div>
  )
}

export default Roadmap
