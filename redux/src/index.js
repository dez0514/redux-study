import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import Reducers from './redux/reducers/index'
// 通过createStore方法生成store
const store = createStore(Reducers)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
