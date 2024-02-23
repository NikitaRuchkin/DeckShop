import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./reducers/user/UserReducer";
import ProductsReducer from "./reducers/Products/ProductsReducer";
import RegisterDrawer from "./reducers/RegisterDrawer/RegisterDrawer";

export const store = configureStore({
	reducer: {
		UserReducer,
		ProductsReducer,
		RegisterDrawer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch