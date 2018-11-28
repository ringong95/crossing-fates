import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import storeFactory from './store/createStore';
import * as serviceWorker from './serviceWorker';

const initialState = {
};

const Store = storeFactory(initialState);

const FinalApp = () => (
    <MuiThemeProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  );

ReactDOM.render(
    <FinalApp />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
