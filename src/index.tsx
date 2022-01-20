import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';
// import reportWebVitals from './plugins/webVitals/reportWebVitals';

import 'styles/index.css';

console.info(process.env.REACT_APP_VERSION);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();
