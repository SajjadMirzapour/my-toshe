import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const value = useState(null);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}
