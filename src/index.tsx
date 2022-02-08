import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/app';
// import reportWebVitals from './plugins/webVitals/reportWebVitals';

console.info(process.env.REACT_APP_VERSION);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();
