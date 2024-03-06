import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {UserState} from './type'

const initialState: UserState = {
	userInfo: {
		name: 'Igor',
		address: {},
	},
	token: ''
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
		
		deleteToken: (state) => {
			document.cookie = `auth=`;
			state.token = ''
		},
		
	},
})

export const { setToken, deleteToken } = UserInfoReducer.actions
export const getUserInfoState = (state:UserState)  => state.userInfo
export const getUserTokenState = (state:RootState )  => state.UserReducer.token
export default UserInfoReducer.reducer