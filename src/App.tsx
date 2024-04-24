import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider, ThemeContext } from './contexts/ThemeContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(lightTheme);

  useEffect(() => {
    setSelectedTheme(theme ? darkTheme : lightTheme);
  }, [theme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>  
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
