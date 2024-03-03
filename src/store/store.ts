import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loadProductsById } from '../api/Products/api'
import UserReducer from "./reducers/user/UserReducer";
import ProductsReducer from "./reducers/Products/ProductsReducer";
import RegisterDrawer from "./reducers/RegisterDrawer/RegisterDrawer";

export const store = configureStore({
	reducer: {
		UserReducer,
		ProductsReducer,
		RegisterDrawer,
		[loadProductsById.reducerPath]: loadProductsById.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loadProductsById.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)