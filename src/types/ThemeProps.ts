export interface ThemeProps {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}
