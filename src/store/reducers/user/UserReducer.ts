import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {UserState} from './type'

const initialState: UserState = {
	userInfo: {
		name: 'Igor',
		address: {},
	},
	token: '',
	tokenCart: '',
	userEmailRegister: ''
}

export const UserInfoReducer = createSlice({
	name: 'UserInfoSlice',
	initialState,
	reducers: {

		setToken: (state, action) => {
			if(action.payload !== '') {
				let date = new Date(Date.now() + 86400e3).toUTCString();
				document.cookie = `auth=${action.payload}; expires= + ${date}`;
			}
			state.token = action.payload
		},
		
		setTokenCart: (state, action) => {
			if(action.payload !== '') {
				let date = new Date(Date.now() + 86400e3).toUTCString();
				document.cookie = `cart=${action.payload}; expires= + ${date}`;
			}
			state.tokenCart = action.payload
		},
		
		deleteToken: (state) => {
			document.cookie = `auth=; expires=-1`;
			state.token = ''
		},
		
		setUserEmailRegister: (state, payload) => {
			state.userEmailRegister = payload.payload
		},
		
	},
})

export const { setToken, deleteToken, setTokenCart, setUserEmailRegister } = UserInfoReducer.actions
export const getUserInfoState = (state:UserState)  => state.userInfo
export const getUserTokenState = (state:RootState )  => state.UserReducer.token
export const getUserTokenCartState = (state:RootState )  => state.UserReducer.tokenCart
export default UserInfoReducer.reducer