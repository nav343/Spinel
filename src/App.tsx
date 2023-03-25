import Theme from "./components/global/Theme"
import { useTheme } from "./components/global/useTheme"
import Greet from "./pages/Greet"

function App() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className={`${theme === 'dark' ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"} transition-all`}>
        <Greet theme={theme} setTheme={setTheme} />
      </div>
      <Theme theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
