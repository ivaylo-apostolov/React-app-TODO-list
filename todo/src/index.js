import React from 'react';
import ReactDOM from 'react-dom';
import './components/app/App.css';
import App from './components/app/App';
import App2 from './components/app2/App2'
import TestApp from './components/app/TestApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/simpleReduxApp'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App2/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
