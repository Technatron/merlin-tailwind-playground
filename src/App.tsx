import Test from "./components/Test"
import CardContextProvider from "./context/CardContext"

const App = () => {
  return (
    <CardContextProvider>
      <div className="w-vw bg-blue-50 flex justify-center">
        <Test/>
      </div>
    </CardContextProvider>
  )
}

export default App