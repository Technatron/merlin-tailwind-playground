import { useContext, useEffect } from "react";
import { useCardContext } from "../context/CardContext"

const CustomButton = ({label, styling, currentCard}) => {

  const {clickedCard, setClickedCard, setOverLayOn, overLayOn} = useCardContext();

  const handleClick = () => {
    setOverLayOn(prev => !prev);
    setClickedCard(currentCard);
  }
  return (
      <button className={`${styling} bg-white w-19 h-10 rounded-2xl hover:bg-slate-200`}
      onClick={() => handleClick()}
      >{label}</button>
  )
}

export default CustomButton