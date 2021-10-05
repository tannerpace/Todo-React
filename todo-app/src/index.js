import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';

const DATA = [

];

ReactDOM.render(

  <React.StrictMode>
     <ThemeProvider >
    <App tasks={DATA} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


