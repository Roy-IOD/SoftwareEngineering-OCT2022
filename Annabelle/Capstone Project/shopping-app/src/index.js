import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <UserProvider>
        <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
