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
import {cartGetDataQuery, cartTokenQuery} from "./api/Cart/query";
import {CartData} from "./api/Cart/types";
import {setQuantityGlobal} from "./store/reducers/Products/ProductsReducer";

function App() {
  const dispatch = useDispatch<any>()
  useEffect(()=> {
    
    dispatch(setToken(getCookieAuth()))
    if(!getCookieCart()) {
      dispatch(loadCart.endpoints.getCartToken.initiate(cartTokenQuery()))
    } else {
      dispatch(setTokenCart(getCookieCart()))
      dispatch(loadCart.endpoints.getCartData.initiate(cartGetDataQuery())).then(
        (product: {data: CartData })=> {
          if(product && product.data) {
            dispatch(setQuantityGlobal(product.data.data.cart.total_quantity))
          }
          return product
        }
      )
    }
  })
  
  return (
      <RouterProvider router={router} />
  );
}

export default App;
