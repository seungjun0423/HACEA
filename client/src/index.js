// 모듈 임포트 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import axios from 'axios';

// 스토어 임포트
import Store from './Ducks/Store/Store';

axios.defaults.withCredentials = true ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
