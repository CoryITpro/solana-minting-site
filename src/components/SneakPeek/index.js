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
          <div className="sneakpeek-hot">
            30% Royalties back to holders + Another 30% to community wallet
          </div>
          <div className="sneakpeek-hot">
            Biggest Mint Raffle on Solana of over $40000 in giveaways
          </div>
          <div className="sneakpeek-hot">
            First 100 Mints of public sale are completely free
          </div>
        </div>
      </div>
    </div>
  )
}

export default SneakPeek
