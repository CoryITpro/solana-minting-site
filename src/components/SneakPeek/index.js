import { useState, useEffect } from "react"
import { SneakPeekImage } from "./style"
import "./style.scss"

const SneakPeek = () => {
  const [peekImage, setPeekImage] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const image = require(`../../resources/sneakpeek/llama${count % 11}.png`)
      setPeekImage(image.default)
      setCount(count > 11 ? (count % 11) + 1 : count + 1)
    }, 200)

    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="sneakpeek">
      <div className="sneakpeek-title">/// Our Story & Goal ///</div>
      <div className="sneakpeek-wrapper">
        <div className="sneakpeek-iterator flex">
          <SneakPeekImage image={peekImage} />
        </div>
        <div className="sneakpeek-comment flex flex-column">
          <span>
            The Cool Llama Gangs is a collection of 10,000 randomly generated
            Llamas stored on the Cardano Blockchain.
          </span>
          <span>
            The Cool Llama Gangs brings some collective fun to the Cardano
            Blockchain. Our Llamas are cool, weird, strong, powerful, and kind
            of goofy and they all have randomly generated attributes! Keep an
            eye out for rare Llamas, you might want to use these to generate
            your own custom merchandise post-launch, at our Cool Llama Gangs
            Store
          </span>
          <span>
            Gangs will also get access to the other owner exclusive benegits...
          </span>
        </div>
      </div>
    </div>
  )
}

export default SneakPeek
