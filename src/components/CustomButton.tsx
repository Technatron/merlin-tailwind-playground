
const CustomButton = ({label, styling}) => {
  return (
      <button className={`${styling} bg-white w-19 h-10 rounded-2xl hover:bg-slate-200`}>{label}</button>
  )
}

export default CustomButton