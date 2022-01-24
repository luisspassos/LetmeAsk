import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

import { useTheme } from './hooks/useTheme'

function App() {
  const { state, themes } = useTheme()

  return (
    <BrowserRouter>
      <ThemeProvider theme={state.theme === 'dark' ? themes.dark : themes.light}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
