import type { ReactNode } from "react"
import CustomButton from "./CustomButton"
import type { CardData } from "../context/CardContext";

type CardType = {
  children: ReactNode;
  styling: string; 
  currentCard: CardData
}

const Card = ({children, styling, currentCard}: CardType) => {

  console.log(`bg-[${styling}]`);
  
  return (
      <div 
      style={
        { background: `linear-gradient(to right, ${currentCard.gradientStart}, {currentCard.gradientEnd})` }}
      className={`rounded-2xl h-[20em] flex flex-col justify-center items-center text-center gap-2 `}>
        {children}
        <CustomButton label={"click"} styling={""} currentCard={currentCard}/>
    </div>
  )
}

export default Card