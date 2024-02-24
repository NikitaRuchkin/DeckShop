import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Error from "./pages/Error/Error";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import CheckoutFirst from "./pages/CheckoutFirst/CheckoutFirst";
import CheckoutSecond from "./pages/CheckoutSecond/CheckoutSecond";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Account from "./pages/Account/Account";
import HeaderFooterWrapper from "./hocs/HeaderFooterWrapper/HeaderFooterWrapper";
import Support from "./pages/Support/Support";
import CheckoutThird from "./pages/CheckoutThird/CheckoutThird";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <HeaderFooterWrapper>
      <Error/>
    </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <HomePage />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/catalog",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Catalog />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/catalog/:category",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Category />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/catalog/category/:product",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Product />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/cart",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Cart />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/checkoutFirst",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <CheckoutFirst />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/checkoutSecond",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <CheckoutSecond />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/checkoutThird",
    errorElement: <HeaderFooterWrapper>
      <Error/>
    </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <CheckoutThird />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/createAccount",
    errorElement: <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <CreateAccount />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/support",
    errorElement: <HeaderFooterWrapper>
      <Error/>
    </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Support />
        </HeaderFooterWrapper>
    ),
  },
  {
    path: "/account",
    errorElement: <HeaderFooterWrapper>
      <Error/>
    </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Account />
        </HeaderFooterWrapper>
    ),
    children: [
      {
        path: "orderHistory",
        element: <Account />,
        // children: [
        //   {
        //     path: "test",
        //     element: <Account />,
        //   }
        // ]
        // loader: redirectIfUser,
      },
      {
        path: "addressBook",
        element: <Account />,
        // loader: redirectIfUser,
      },
      {
        path: "paymentMethod",
        element: <Account />,
        // loader: redirectIfUser,
      },
      {
        path: "accountInfo",
        element: <Account />,
        // loader: redirectIfUser,
      },
    ],
  },
  {
    path: "/404",
    errorElement: <HeaderFooterWrapper>
      <Error/>
    </HeaderFooterWrapper>,
    element: (
        <HeaderFooterWrapper>
          <Error/>
        </HeaderFooterWrapper>
    ),
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
