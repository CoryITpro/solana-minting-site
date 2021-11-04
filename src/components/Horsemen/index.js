import Gallery1 from "resources/slider/1.png"
import Gallery2 from "resources/slider/2.png"
import Gallery3 from "resources/slider/3.png"
import Gallery4 from "resources/slider/4.png"
import "./style.scss"

const Horsemen = () => (
  <div className="horsemen flex flex-column">
    <div className="horsemen-title container">/// 4 HORSEMEN ///</div>
    <div className="horsemen-wrapper container">
      <div className="horsemen-item flex flex-column">
        <img src={Gallery1} alt="conquest" loading="lazy" />
        <span>Conquest</span>
      </div>
      <div className="horsemen-item flex flex-column">
        <img src={Gallery2} alt="hunger" loading="lazy" />
        <span>Hunger</span>
      </div>
      <div className="horsemen-item flex flex-column">
        <img src={Gallery3} alt="fury" loading="lazy" />
        <span>Fury</span>
      </div>
      <div className="horsemen-item flex flex-column">
        <img src={Gallery4} alt="death" loading="lazy" />
        <span>Death</span>
      </div>
    </div>
  </div>
)

export default Horsemen
