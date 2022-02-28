import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <main className='h-screen sticky overflow-y-auto bg-neutral-50 dark:bg-neutral-700 transition-all'>
        <App />
      </main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
