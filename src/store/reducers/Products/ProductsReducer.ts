import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {ProductCatalog} from './type'

const initialState: ProductCatalog = {
	ProductCatalog: '',
	Category: '',
	Card: '',
	quantity: 0,
}


export const ProductsReducer = createSlice({
	name: 'ProductsSlice',
	initialState,
	
	reducers: {
		setQuantityGlobal: (state, payload) => {
			console.log(payload)
			state.quantity = payload.payload
		},
	},
})

export const { setQuantityGlobal } = ProductsReducer.actions
export const getQuantity = (state:RootState)  => state.ProductsReducer.quantity
export const getCardById = (state:RootState)  => state.ProductsReducer.Card

export default ProductsReducer.reducer