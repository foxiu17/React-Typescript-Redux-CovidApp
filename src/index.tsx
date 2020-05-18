import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from "./Context/Store";
import { ThemeProvider } from "./Context/ThemeContext";

import App from './views/MainPage/App';

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
