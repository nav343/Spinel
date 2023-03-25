import { Link } from "react-router-dom"
import Theme from "../components/global/Theme"
import { useTheme } from "../components/global/useTheme"

function CreateSpinel(): JSX.Element {
  const { theme, setTheme } = useTheme()
  const make = [
    {
      title: "Plain text (.txt)",
      to: "/plain",
      description: "Plain text file without any styling or highlighting, useful for writing short notes not meant for presentations."
    },
    {
      title: "Markdown file (.md)",
      to: "/markdown",
      description: "Write notes using code (Markdown language), enables you to write beautiful, colorful and more attractive notes for presentations etc. Comes with syntax highlighting code a bunch of languages. Custom font size, color and style"
    }
  ]
  return (
    <>
      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : "bg-gray-300 text-gray-900"} w-screen h-screen flex items-center justify-center flex-col`}>
        <h1 className="text-3xl font-bold">New Spinel</h1>

        <div className="flex items-center justify-center flex-row my-4">
          {make.map((mode) => {
            return (
              <Link to={mode.to} className={`cursor-pointer p-4 transition-all ease-linear duration-200 m-2 flex items-center justify-center flex-col border-2 ${theme === 'dark' ? "border-white hover:bg-white hover:text-gray-900" : "border-gray-900 hover:bg-gray-900 hover:text-gray-300"} rounded-xl w-[30vw] h-[40vh] text-center`}>
                <h1 className="font-semibold text-xl">{mode.title}</h1>
                <p className="my-2 text-lg">{mode.description}</p>
              </Link>
            )
          })}
        </div>

        <Link to={"/"} className={`p-2 text-2xl font-semibold px-5 rounded-xl border-2 transition-all ease-linear duration-200 ${theme === 'dark' ? "border-white hover:text-gray-900 hover:bg-white" : "border-gray-900 hover:text-white hover:bg-gray-900"}`}>Go back</Link>
      </div>
      <Theme theme={theme} setTheme={setTheme} />
    </>
  )
}
export default CreateSpinel
