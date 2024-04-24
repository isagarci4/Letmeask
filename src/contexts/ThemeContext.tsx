import { ReactNode, createContext, useState } from 'react';

type ThemeContextType = {
    theme: boolean
    setTheme: (newState: boolean) => void
    toggleTheme: () => void
}

type ThemeContextProps = {
    children: ReactNode
}

const initialValue: ThemeContextType = {
    theme: false,
    setTheme: () => {},
    toggleTheme: () => {}
}

export const ThemeContext = createContext(initialValue)

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(initialValue.theme);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};