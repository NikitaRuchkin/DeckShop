import React, {useEffect} from "react";
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';

import {useDispatch} from "react-redux";
import {setToken} from "./store/reducers/user/UserReducer";
import {getCookieAuth} from './shared/cookies/setCookie'

import {router} from './shared/routes'

function App() {
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(setToken(getCookieAuth()))
  })
  
  return (
      <RouterProvider router={router} />
  );
}

export default App;
