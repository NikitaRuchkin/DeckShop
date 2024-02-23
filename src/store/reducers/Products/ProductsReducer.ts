import {createSlice} from '@reduxjs/toolkit'
import {loadProductsCatalog} from '../../../api/Products/products'
import {RootState} from '../../store'
import {ProductCatalog} from './type'


const initialState: ProductCatalog = {
	ProductCatalog: [],
}

export const ProductsReducer = createSlice({
	name: 'ProductsSlice',
	initialState,
	reducers: {
		// setValueOfRow: (state, action) => {
		// 	state.token =  action
		// },

		setProducts: (state, action) => {

			state.ProductCatalog = action.payload
		},
		// deleteToken: (state) => {
		// 	state.token = ''
		// },
		// deleteRowDataOfTable: (state, action) => {
		// 	state.dataTable.splice(action.payload, 1)
		// },
	},
	// extraReducers: () => {
	// 	[loadProductsCatalog.fulfilled]: (state, { payload }) => {
	// 		state.user = payload.data;
	// 	}
		// [loadProductsCatalog.rejected]: (state, action) => {
		// 	state.status = "error";
		// 	state.errorMessage = "Could not fetch data. Please refresh to try again."
		// },
	// },
})

// export const { setToken, deleteToken } = UserInfoReducer.actions
// export const getUserInfoState = (state:UserState)  => state.userInfo
export const getUserTokenState = (state:RootState )  => state.UserReducer.token
export default ProductsReducer.reducer