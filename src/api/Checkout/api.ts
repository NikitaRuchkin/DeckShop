import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loadCheckout = createApi({
	reducerPath: 'loadCheckoutRequests',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://deckshop.com/graphql' }),
	endpoints: (builder) => ({
		
		sendUserInfo: builder.query<any, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'}}),
		}),
		checkUserEmail: builder.query<any, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'}}),
		}),
		
	}),
})

export const {useCheckUserEmailQuery, useSendUserInfoQuery} = loadCheckout