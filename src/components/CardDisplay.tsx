import { useCardContext } from "../context/CardContext"


const CardDisplay = () => {
  const { clickedCard } = useCardContext();

  console.log("Inside CardDisplay: ", clickedCard);
  
  return (
    <div className={` ${clickedCard?.cardStyling} w-[40em] h-[40em] rounded-2xl
    flex
    flex-col
    items-center
    justify-center
    text-center
    gap-5
    `}>
      <h1 className="text-8xl">{clickedCard?.title}</h1>
      <p className="text-3xl w-80">{clickedCard?.body}</p>
    </div>
  )
}

export default CardDisplay