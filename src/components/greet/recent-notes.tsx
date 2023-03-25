import { ThemeProps } from "../../types/ThemeProps"

function RecentNotes({ theme }: ThemeProps): JSX.Element {
  const notes: { title: string, shortDescription: string }[] = [
    {
      title: "React + Typescript",
      shortDescription: "A guide on how to make a react application with Typescript using CRA"
    },
    {
      title: "React + Typescript + Vite",
      shortDescription: "A guide on how to make a react application with Typescript using Vite"
    },
    {
      title: "React + Typescript + Electron",
      shortDescription: "A guide on how to setup an Electron app with React and Vite"
    },
  ]

  function shortenLength(str: string): string { return str.slice(0, 40) + '.....' }
  return (
    <div className={`mt-6 pr-5 text-center border-r-2 ${theme === 'dark' ? "border-r-gray-300" : "border-r-gray-900"}`}>
      <h1 className="text-2xl font-bold">Recent Notes</h1>
      {notes.length === 0 ? (
        <div className="text-2xl">
          You don't have any Spinels yet. Create one
        </div>
      ) : notes.map((note) => {
        return (
          <div key={note.title} className={`m-2 p-4 max-w-sm text-center border-2 ${theme === 'dark' ? "border-white hover:bg-white hover:text-gray-900" : "border-gray-900 bg-white hover:bg-gray-900 hover:text-gray-300"} rounded-xl transition-all duration-200 ease-linear cursor-pointer`}>
            <h1 className="text-xl font-semibold">{note.title}</h1>
            <h1 className="text-lg">{shortenLength(note.shortDescription)}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default RecentNotes
