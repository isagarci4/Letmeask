import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from "./contexts/AuthContext";

import { Router } from './Router';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
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