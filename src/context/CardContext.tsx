import React, { createContext, useContext, useState } from 'react'

export type CardData = {
    cardStyling: string
    title: string
    body: string
}

const cards: CardData[] = [
    { cardStyling: "bg-purple-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-green-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-blue-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-orange-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-red-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-pink-300", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-green-300", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-blue-300", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-blue-900", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-pink-900", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
    { cardStyling: "bg-yellow-900", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
]

export type CardContextType = {
    cards: CardData[]
    isCardClicked: boolean
    setIsCardClicked: React.Dispatch<React.SetStateAction<boolean>>
    clickedCard: CardData | null
    setClickedCard: React.Dispatch<React.SetStateAction<CardData | null>>
    overLayOn: boolean
    setOverLayOn: React.Dispatch<React.SetStateAction<boolean>>
}

const cardContext = createContext<CardContextType | null>(null);

export const useCardContext = () => {
    const context = useContext(cardContext);
    if (!context) throw Error("Card context no available");
    return context;
}

const CardContextProvider = ({ children }: React.PropsWithChildren) => {

    const [isCardClicked, setIsCardClicked] = useState(false);
    const [clickedCard, setClickedCard] = useState<CardData | null >(null);
    const [overLayOn, setOverLayOn] = useState(false);


    const value = { cards, isCardClicked, setIsCardClicked, clickedCard, setClickedCard, overLayOn, setOverLayOn };

    return (
        <cardContext.Provider value={value}>
            {children}
        </cardContext.Provider>
    )
}

export default CardContextProvider;