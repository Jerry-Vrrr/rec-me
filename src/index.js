import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {DataContextProvider} from './contexts/DataContext'


ReactDOM.render(
  <BrowserRouter>
  <DataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
