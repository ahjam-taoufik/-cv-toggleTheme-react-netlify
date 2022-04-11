import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './context/theme/themeContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
