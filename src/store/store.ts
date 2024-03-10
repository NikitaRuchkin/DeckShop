import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import UserReducer from "./reducers/user/UserReducer";
import ProductsReducer from "./reducers/Products/ProductsReducer";
import RegisterDrawer from "./reducers/RegisterDrawer/RegisterDrawer";
import { loadProductsById } from '../api/Products/api'
import {loadUser} from "../api/Customer/api";
import {loadCart} from "../api/Cart/api";

export const store = configureStore({
	reducer: {
		UserReducer,
		ProductsReducer,
		RegisterDrawer,
		[loadProductsById.reducerPath]: loadProductsById.reducer,
		[loadUser.reducerPath]: loadUser.reducer,
		[loadCart.reducerPath]: loadCart.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loadProductsById.middleware).concat(loadUser.middleware).concat(loadCart.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)