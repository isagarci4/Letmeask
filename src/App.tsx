import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from "./contexts/AuthContext";

import { Router } from './Router';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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