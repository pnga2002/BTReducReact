


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import {Provider} from 'react-redux'
import { store } from './redux/configStore';

import { BaiTapBurgerRedux } from './Components/BaiTapBurgerRedux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='' element={<BaiTapBurgerRedux/>}>
      </Route>
    </Routes>
  </BrowserRouter>
</Provider></>
);