import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { ThemeProps } from '../../types/ThemeProps'

function Theme({ theme, setTheme }: ThemeProps) {
  return (
    <div className={`absolute bottom-0 left-0 m-4 ${theme === 'dark' ? "bg-white" : "bg-gray-900"} text-2xl p-2 rounded-full cursor-pointer duration-300`} onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}>
      {
        theme === 'dark' ?
          <BsFillSunFill
            className="text-gray-900"
          />
          : <BsFillMoonFill
            className="text-gray-300"
          />
      }
    </div>

  )
}

export default Theme
