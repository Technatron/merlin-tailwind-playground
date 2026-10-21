import React, { createContext, useContext, useState } from 'react'

export type CardData = {
    cardStyling: string;
    title: string;
    body: string;
    gradientEnd: string;
    gradientStart: string;
}

//  background: linear-gradient(to right, #ef629f, #eecda3);
//   background: linear-gradient(to right, #1fddff, #ff4b1f);
//   background: linear-gradient(to right, #f4e2d8, #ba5370);
//   background: linear-gradient(to right, #cfdef3, #e0eafc);
//   background: linear-gradient(to right, #c4e0e5, #4ca1af);
//   background: linear-gradient(to right, #434343, #000000);
//   background: linear-gradient(to right, #283e51, #4b79a1);
//    background: linear-gradient(to right, #d04ed6, #834d9b);
//   background: linear-gradient(to right, #f11712, #0099f7);
//   background: linear-gradient(to right, #2c3e50, #2980b9);
//   background: linear-gradient(to right, #d39d38, #4da0b0);
//   background: linear-gradient(to right, #dbd65c, #5614b0);
//   background: linear-gradient(to right, #2a5298, #1e3c72);
//   background: linear-gradient(to right, #f29492, #114357);
//   background: linear-gradient(to right, #ff9068, #fd746c);
//   background: linear-gradient(to right, #d6ae7b, #eacda3);
//   background: linear-gradient(to right, #a044ff, #6a3093);
//   background: linear-gradient(to right, #5691c8, #457fca);
//   background: linear-gradient(to right, #f15f79, #b24592);
//   background: linear-gradient(to right, #f0cb35, #c02425);
//   background: linear-gradient(to right, #be5869, #403a3e);
//   background: linear-gradient(to right, #64b3f4, #c2e59c);
//   background: linear-gradient(to right, #ed8f03, #ffb75e);
//   background: linear-gradient(to right, #1f1c18, #8e0e00);
//   background: linear-gradient(to right, #8dc26f, #76b852);
//   background: linear-gradient(to right, #512da8, #673ab7);
//   background: linear-gradient(to right, #eea849, #f46b45);
//   background: linear-gradient(to right, #00dbde, #fc00ff);

// create an array of objects where an object contains the color used in these gradient, extract the color combination and put as gradient-start and gradient-end valies in the object , the object should lookk like:
/* 
    { 
        cardStyling: the first color from the gradient,
        title: "The Future",
        body: "generate a name for the combination of the two colors, and also give a fact/trivia on the color",
        gradient-start: the first color from the gradient
        gradient-end: the first color from the gradient
    }
*/

// const cards: CardData[] = [
//     { cardStyling: "bg-purple-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-green-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-blue-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-orange-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-red-500", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-pink-300", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-green-300", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-blue-300", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-blue-900", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-pink-900", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
//     { cardStyling: "bg-yellow-900", title: "The Future", body: "This is a random sentence I am using to test the Effect" },
// ]

const cards: CardData[] = [
    { cardStyling: "#ef629f", title: "Blushing Peach", body: "Flamingo Kiss — Pink and peach together are often used in sunset photography filters; this combo mimics the warm hues of a tropical dusk.", gradientStart: "#ef629f", gradientEnd: "#eecda3" },
    { cardStyling: "#1fddff", title: "Neon Ember", body: "Cyber Flame — Cyan and orange-red are complementary colors on the spectrum, creating maximum visual contrast — a trick used in movie posters.", gradientStart: "#1fddff", gradientEnd: "#ff4b1f" },
    { cardStyling: "#f4e2d8", title: "Rose Dust", body: "Blush Noir — The soft blush-to-crimson transition mimics the color of fading rose petals, commonly used in luxury cosmetic branding.", gradientStart: "#f4e2d8", gradientEnd: "#ba5370" },
    { cardStyling: "#cfdef3", title: "Cloud Drift", body: "Periwinkle Mist — Light blue gradients are psychologically linked to calmness and trust, which is why they dominate healthcare and tech UIs.", gradientStart: "#cfdef3", gradientEnd: "#e0eafc" },
    { cardStyling: "#c4e0e5", title: "Arctic Teal", body: "Glacial Shore — This teal-to-steel combo is inspired by Arctic ocean shallows; teal is one of the few colors that appears in both warm and cool palettes.", gradientStart: "#c4e0e5", gradientEnd: "#4ca1af" },
    { cardStyling: "#434343", title: "Midnight Ash", body: "Carbon Void — Pure black (#000000) absorbs all visible light. This dark gradient is popular in luxury and tech branding for conveying sophistication.", gradientStart: "#434343", gradientEnd: "#000000" },
    { cardStyling: "#283e51", title: "Steel Horizon", body: "Navy Blueprint — Deep navy-to-steel blue is the most common gradient in corporate dashboards; it subconsciously signals reliability and depth.", gradientStart: "#283e51", gradientEnd: "#4b79a1" },
    { cardStyling: "#d04ed6", title: "Violet Reign", body: "Orchid Dusk — Purple has historically been the most expensive pigment to produce; Tyrian purple once cost more than gold by weight.", gradientStart: "#d04ed6", gradientEnd: "#834d9b" },
    { cardStyling: "#f11712", title: "Plasma Rush", body: "Inferno Signal — Red-to-blue is one of the most energetic gradients; red raises heart rate while blue calms — together they create visual tension.", gradientStart: "#f11712", gradientEnd: "#0099f7" },
    { cardStyling: "#2c3e50", title: "Deep Ocean", body: "Midnight Sapphire — This dark teal-to-blue combo is inspired by deep ocean bioluminescence, where blue is the only light wavelength that penetrates deep water.", gradientStart: "#2c3e50", gradientEnd: "#2980b9" },
    { cardStyling: "#d39d38", title: "Desert Lagoon", body: "Sahara Tide — Gold and teal are a rare natural pairing found in scarab beetles, which ancient Egyptians considered sacred symbols of the sun.", gradientStart: "#d39d38", gradientEnd: "#4da0b0" },
    { cardStyling: "#dbd65c", title: "Electric Plum", body: "Volt Storm — Yellow-to-violet is the highest contrast complementary pair on the color wheel, used in warning signs and sports team branding worldwide.", gradientStart: "#dbd65c", gradientEnd: "#5614b0" },
    { cardStyling: "#2a5298", title: "Cobalt Abyss", body: "Deep Navy — The two blues here differ only in lightness; monochromatic gradients like this are used in flags of over 40% of the world's nations.", gradientStart: "#2a5298", gradientEnd: "#1e3c72" },
    { cardStyling: "#f29492", title: "Coral Abyss", body: "Salmon Depth — Coral pink fading to deep teal is inspired by coral reef ecosystems, where warm shallow waters meet cold deep currents.", gradientStart: "#f29492", gradientEnd: "#114357" },
    { cardStyling: "#ff9068", title: "Ember Glow", body: "Tangerine Blaze — This orange-to-coral gradient mimics the color of molten lava cooling at its edges, a palette popular in food and energy branding.", gradientStart: "#ff9068", gradientEnd: "#fd746c" },
    { cardStyling: "#d6ae7b", title: "Sand Silk", body: "Golden Parchment — Warm beige-to-cream gradients are associated with aged paper and antiquity; used heavily in historical and artisan brand aesthetics.", gradientStart: "#d6ae7b", gradientEnd: "#eacda3" },
    { cardStyling: "#a044ff", title: "Ultraviolet", body: "Cosmic Grape — UV purple is the shortest visible wavelength humans can perceive. Mantis shrimp can see 16 color channels — including far beyond UV.", gradientStart: "#a044ff", gradientEnd: "#6a3093" },
    { cardStyling: "#5691c8", title: "Sky Steel", body: "Azure Fade — Two shades of cornflower blue; this monochromatic gradient is the most common background choice in social media profile designs.", gradientStart: "#5691c8", gradientEnd: "#457fca" },
    { cardStyling: "#f15f79", title: "Fuchsia Dusk", body: "Magenta Bloom — Hot pink to deep magenta is the signature palette of the 1980s neon era; magenta doesn't exist as a single wavelength of light.", gradientStart: "#f15f79", gradientEnd: "#b24592" },
    { cardStyling: "#f0cb35", title: "Solar Flare", body: "Gold Ember — Yellow-to-crimson mimics the color of the sun during a solar flare event; ancient cultures universally associated this palette with divine power.", gradientStart: "#f0cb35", gradientEnd: "#c02425" },
    { cardStyling: "#be5869", title: "Dusty Charcoal", body: "Mauve Shadow — Muted rose fading to near-black is a palette associated with Victorian mourning fashion, where full black was reserved for the first year of grief.", gradientStart: "#be5869", gradientEnd: "#403a3e" },
    { cardStyling: "#64b3f4", title: "Sky Meadow", body: "Cerulean Mint — Sky blue to soft green mirrors the color transition from sky to treetops at dawn, a palette shown to reduce cortisol levels in studies.", gradientStart: "#64b3f4", gradientEnd: "#c2e59c" },
    { cardStyling: "#ed8f03", title: "Amber Glow", body: "Saffron Haze — Deep amber to golden yellow is the color of saffron, the world's most expensive spice by weight, harvested from crocus flowers.", gradientStart: "#ed8f03", gradientEnd: "#ffb75e" },
    { cardStyling: "#1f1c18", title: "Obsidian Ember", body: "Dark Crimson — Near-black fading to deep blood red is used in horror and thriller genres; dark red is the last color the human eye loses sensitivity to at night.", gradientStart: "#1f1c18", gradientEnd: "#8e0e00" },
    { cardStyling: "#8dc26f", title: "Forest Canopy", body: "Sage Meadow — Two shades of natural green; studies show green environments reduce mental fatigue by up to 15% compared to urban grey environments.", gradientStart: "#8dc26f", gradientEnd: "#76b852" },
    { cardStyling: "#512da8", title: "Deep Violet", body: "Indigo Spectrum — Two shades of deep purple; indigo was originally a separate color added to the rainbow by Newton to match the 7 notes of the musical scale.", gradientStart: "#512da8", gradientEnd: "#673ab7" },
    { cardStyling: "#eea849", title: "Citrus Sunset", body: "Mango Flame — Amber to coral orange is the exact color palette of a Saharan sunset, caused by dust particles scattering shorter blue wavelengths.", gradientStart: "#eea849", gradientEnd: "#f46b45" },
    { cardStyling: "#00dbde", title: "Neon Aurora", body: "Cyan Magenta — Cyan and magenta are two of the three primary colors in printing (CMYK); together they produce the vivid hues of aurora borealis displays.", gradientStart: "#00dbde", gradientEnd: "#fc00ff" },
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
    const [clickedCard, setClickedCard] = useState<CardData | null>(null);
    const [overLayOn, setOverLayOn] = useState(false);


    const value = { cards, isCardClicked, setIsCardClicked, clickedCard, setClickedCard, overLayOn, setOverLayOn };

    return (
        <cardContext.Provider value={value}>
            {children}
        </cardContext.Provider>
    )
}

export default CardContextProvider;