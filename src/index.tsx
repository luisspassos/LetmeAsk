import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { ColorThemeProvider } from './contexts/ColorThemeContext'
import { AuthContextProvider } from './contexts/AuthContext'

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ColorThemeProvider>
        <App />
      </ColorThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
