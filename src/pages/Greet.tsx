import CreateReadNote from "../components/greet/create-read-notes"
import RecentNotes from "../components/greet/recent-notes"
import { ThemeProps } from "../types/ThemeProps"

function Greet({ theme, setTheme }: ThemeProps): JSX.Element {
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      <h1 className="font-bold text-4xl font-sans cursor-default">Spinel</h1>
      <div className="flex items-center justify-center flex-row">
        <RecentNotes theme={theme} setTheme={setTheme} />
        <CreateReadNote theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}

export default Greet
