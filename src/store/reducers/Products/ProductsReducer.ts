import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {ProductCatalog} from './type'

const initialState: ProductCatalog = {
	ProductCatalog: '',
	Category: '',
	Card: ''
}


export const ProductsReducer = createSlice({
	name: 'ProductsSlice',
	initialState,
	
	reducers: {},
})

export const getProducts = (state:RootState)  => state.ProductsReducer.ProductCatalog
export const getCategoryById = (state:RootState)  => state.ProductsReducer.Category
export const getCardById = (state:RootState)  => state.ProductsReducer.Card

export default ProductsReducer.reducer