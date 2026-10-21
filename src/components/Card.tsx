import type { ReactNode } from "react"
import CustomButton from "./CustomButton"
import type { CardData } from "../context/CardContext";

type CardType = {
  children: ReactNode;
  styling: string; 
  currentCard: CardData
}

const Card = ({children, styling, currentCard}: CardType) => {
  return (
      <div className={`rounded-2xl h-[20em] bg-amber-50 flex flex-col justify-center items-center text-center gap-2 ${styling} `}>
        {children}
        <CustomButton label={"click"} styling={""} currentCard={currentCard}/>
    </div>
  )
}

export default Card