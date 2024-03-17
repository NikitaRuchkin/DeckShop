import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IFormRegisterValues} from "./type";

interface IToken {
	"data": {
		"generateCustomerToken": {
			"token": string
		}
	}
	"errors"?: Array<{
		message: string;
	}>
}

export const loadUser = createApi({
	reducerPath: 'loadUserInfo',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://deckshop.com/graphql' }),
	endpoints: (builder) => ({
		
		getUserToken: builder.query<IToken, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
		createUserAcc: builder.query<IFormRegisterValues, string>({
			query: (props) => ({ url: ``, method: 'POST', body: props, headers: {'Content-Type': 'application/json'} }),
		}),
		
	}),
})

export const {useGetUserTokenQuery} = loadUser