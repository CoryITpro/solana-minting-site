import { useState, useEffect } from "react"
import { calculateTimeLeft } from "helpers/timer"
import "./style.scss"

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div className="hero">
      <div className="hero-title flex flex-column">
        <span>Welcome to the</span>
        <span>Cool Llama Gangs</span>
      </div>
      <div className="hero-comment">
        10,000 Cool Llamas are soon to join the Cool Llama Gang on the Cardano
        Blockchain, with each one randomly generated from a combination of over
        xxx individual traits!
      </div>
      <div className="hero-timer flex">
        <div className="hero-timer-item flex flex-column">
          <span>{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className="hero-timer-item flex flex-column">
          <span>{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className="hero-timer-item flex flex-column">
          <span>{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="hero-timer-item flex flex-column">
          <span>{timeLeft.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      <div className="hero-mint flex">
        <button onClick={() => alert("Mint Clicked")}>MINT</button>
      </div>
      <div className="hero-background"></div>
    </div>
  )
}

export default Hero
