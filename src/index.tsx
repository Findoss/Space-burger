import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App';
// import reportWebVitals from './plugins/webVitals/reportWebVitals';

console.log(process.env.REACT_APP_VERSION);
console.log(process.env.REACT_APP_PUBLIC_URL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();
