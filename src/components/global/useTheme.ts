import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  return { theme, setTheme }
}
