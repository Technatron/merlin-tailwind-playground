import CustomButton from "./CustomButton"


const Card = ({children, styling}) => {
  return (
    <div className={`rounded-2xl size-50 sm:size-55 md:size-65 bg-amber-50 flex flex-col justify-center items-center text-center gap-4 ${styling}`}>
        {children}
        <CustomButton label={"click"} styling={""}/>
    </div>
  )
}

export default Card