import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loadProductsById = createApi({
	reducerPath: 'loadProductsCategory',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://deckshop.com/graphql' }),
	endpoints: (builder) => ({
		
		getCatalog: builder.query({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
		getCategory: builder.query({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
	}),
})

export const {useGetCatalogQuery, useGetCategoryQuery} = loadProductsById