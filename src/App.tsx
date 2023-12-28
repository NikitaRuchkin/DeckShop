import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Error from "./pages/Error/Error";
import Cart from "./pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <HomePage />,
    },
    {
        path: "/catalog",
        errorElement: <Error />,
        element: <Catalog />,
    },
    {
        path: "/catalog/category",
        errorElement: <Error />,
        element: <Category />,
    },
    {
        path: "/catalog/category/product",
        errorElement: <Error />,
        element: <Product />,
    },
    {
      path: "/cart",
      errorElement: <Error />,
      element: <Cart />,
    },
    {
        path: "/404",
        errorElement: <Error />,
        element: <Error />,
    },
]);

function App() {
  return (
        <div className="App">
          <div className='Header'>
              <Header />
          </div>
          <div className='main'>
            <RouterProvider router={router} />
          </div>
          <Footer/>
        </div>
  );
}

export default App;
