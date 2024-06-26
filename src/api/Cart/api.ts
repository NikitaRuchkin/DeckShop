import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {CategoryTypes, ProductByUrl} from "../../shared/types/CatalogTypes";
import {CartData, CartToken} from "./types";
import {useDispatch} from "react-redux";
import {setTokenCart} from '../../store/reducers/user/UserReducer'

export const loadCart = createApi({
	reducerPath: 'loadCartRequests',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://deckshop.com/graphql' }),
	endpoints: (builder) => ({
		
		getCartData: builder.query<CartData, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'}}),
		}),
		
		addProductToCart: builder.query<CartData, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'}}),
		}),
		
		updateProductInCart: builder.mutation<CartData, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'}}),
		}),
		
		getCartToken: builder.query<CartToken, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
			transformResponse: (response: CartToken) => {
				if(response.data && response?.data?.createEmptyCart ) {
					let date = new Date(Date.now() + 86400e3).toUTCString();
					document.cookie = `cart=${response.data.createEmptyCart}; expires= + ${date}`;
				}
				return response
			},
		})
		
	}),
})

export const {useGetCartTokenQuery, useGetCartDataQuery} = loadCart