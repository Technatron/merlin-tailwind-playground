export type LetterEffectProps = {
    text: string,
    styling: string
}

const LetterJumpingWrapper = ({text, styling=""}: LetterEffectProps) => {

    return(
        
        <div className="flex gap-1 flex-wrap justify-center">
            {text.split(" ").map( word => {
                return <div className={`transition-all hover:-translate-y-1 duration-300 ease-in-out ${styling}`}> {word+" "} </div>
            })}
        </div>
        
    );
}

export default LetterJumpingWrapper;