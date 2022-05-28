import 'simplebar/src/simplebar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

ReactDOM.render(
  <HelmetProvider>
    <ThemeProvider>
      {/* <ScrollToTop /> */}
      <BaseOptionChartStyle /> 
      <App />
       </ThemeProvider>  
   </HelmetProvider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
//serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
