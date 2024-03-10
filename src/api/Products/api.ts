import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {CategoryTypes, ProductByUrl} from "../../shared/types/CatalogTypes";

export const loadProductsById = createApi({
	reducerPath: 'loadProductsCategory',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://deckshop.com/graphql' }),
	endpoints: (builder) => ({
		
		getCatalog: builder.query({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
		getCategory: builder.query<CategoryTypes, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
		getProduct: builder.query<ProductByUrl, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
	}),
})

export const {useGetCatalogQuery, useGetCategoryQuery, useGetProductQuery} = loadProductsById