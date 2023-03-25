import { Link } from "react-router-dom"
import { ThemeProps } from "../../types/ThemeProps"

function CreateReadNote({ theme }: ThemeProps): JSX.Element {
  return (
    <div className="ml-4 flex items-center justify-center flex-col">
      <Link className={`py-3 w-[25vw] text-xl p-2 border-2 text-center my-2 transition-all duration-100 ease-linear rounded-xl ${theme === 'dark' ? "bg-gray-900 border-white hover:bg-white hover:text-gray-900" : "border-gray-900 bg-white hover:bg-gray-900 hover:text-white"}`} to={"/new"}>Create new Spinel ➭</Link>
      <Link className={`py-3 w-[25vw] text-xl p-2 border-2 my-2 text-center transition-all duration-100 ease-linear rounded-xl ${theme === 'dark' ? "bg-gray-900 border-white hover:bg-white hover:text-gray-900" : "border-gray-900 bg-white hover:bg-gray-900 hover:text-white"}`} to={"/all"}>View all Spinels➭</Link>
      <h1 className="italic w-[20vw] text-center">Support us by starring the project on Github</h1>
    </div>
  )
}

export default CreateReadNote
