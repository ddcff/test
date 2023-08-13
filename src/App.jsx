import React, { Fragment } from 'react'
import Routers from './router'
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
         <Routers />
      </Provider>
    </Fragment>
  )
}
