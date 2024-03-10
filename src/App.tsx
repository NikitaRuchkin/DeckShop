import React, {useEffect} from "react";
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';

import {useDispatch} from "react-redux";
import {setToken, setTokenCart} from "./store/reducers/user/UserReducer";
import {getCookieAuth, getCookieCart} from './shared/cookies/setCookie'

import {router} from './shared/routes'
import {loadCart} from "./api/Cart/api";
import {cartTokenQuery} from "./api/Cart/query";

function App() {
  
  const dispatch = useDispatch<any>()
  useEffect(()=> {
    dispatch(setToken(getCookieAuth()))
    if(!getCookieCart()) {
      dispatch(loadCart.endpoints.getCartToken.initiate(cartTokenQuery()))
    } else {
      dispatch(setTokenCart(getCookieCart()))
    }
  })
  
  return (
      <RouterProvider router={router} />
  );
}

export default App;
