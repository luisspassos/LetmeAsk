import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room'; 
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'
import { ToggleThemeProvider } from './contexts/ToggleThemeContext';

import { useTheme } from './hooks/useTheme';

function App() {

  const [theme, setTheme] = useTheme();

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ToggleThemeProvider theme={{
          state: theme.state,
          light,
          dark,
          save: theme.save,
          setTheme
        }}>
          <ThemeProvider theme={theme.state}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/rooms/new" element={<NewRoom />}/>
              <Route path="/rooms/:id" element={<Room />}/>
              <Route path="/admin/rooms/:id" element={<AdminRoom />} />
            </Routes>
          </ThemeProvider>
        </ToggleThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
