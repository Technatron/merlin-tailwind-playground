export type LetterEffectProps = {
    text: string,
    styling: string
}

const LetterJumpingWrapper = ({text, styling=""}: LetterEffectProps) => {

    return(
        
        <div>
            {text.split(" ").map( word => {
                return <span className={`transition-all hover:-translate-y-1 duration-300  ease-in-out ${styling}`}> {word+" "} </span>
            })}
        </div>
        
    );
}

export default LetterJumpingWrapper;