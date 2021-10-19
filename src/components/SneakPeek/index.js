import { SneakPeekImage } from "./style"
import peekImage from "resources/sneakpeak.gif"
import "./style.scss"

const SneakPeek = () => {
  return (
    <div className="sneakpeek">
      <div className="sneakpeek-title">/// Our Story & Goal ///</div>
      <div className="sneakpeek-wrapper">
        <div className="sneakpeek-iterator flex">
          <SneakPeekImage image={peekImage} />
        </div>
        <div className="sneakpeek-comment flex flex-column">
          <span>
            Coollama Gang is an NFT collection with a total of 8,888 unique and
            randomly-generated llamas living on Solana. Our goal is to create a
            true community-based story game on the Solana blockchain, with
            deflationary and rewards mechanism.
          </span>
        </div>
      </div>
    </div>
  )
}

export default SneakPeek
