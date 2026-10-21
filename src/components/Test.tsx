
import Card from "./Card"
import LetterJumpingWrapper from "./LetterJumpingWrapper"
import CardDisplay from "./CardDisplay"
import { useCardContext } from "../context/CardContext"


const Test = () => {
    const {cards, overLayOn, setOverLayOn} = useCardContext();
    return (
        <>
            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-4 max-w-5xl items-center mx-auto'>
                {cards.map((card) => (
                    <Card styling={card.cardStyling} currentCard={card} >
                        <LetterJumpingWrapper text={card.title} styling="font-thunder text-5xl uppercase font-extrabold transition " />
                        <div className="flex justify-between gap-1">
                            <LetterJumpingWrapper text={card.body} styling="hover:text-white " />
                        </div>
                    </Card>
                ))}
            </div>

            {overLayOn && <div className="lightbox rounded-2xl  bg-slate-400 z-50  fixed w-full h-full flex  justify-center items-center">
                <div>
                    <button className="bg-white px-3 py-1" onClick={()=> setOverLayOn(false)}>X</button>
                    <CardDisplay />
                </div>
            </div>
            }
        </>
    )
}

export default Test