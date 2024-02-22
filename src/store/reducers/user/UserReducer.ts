import {createSelector, createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {UserState} from './type'

const initialState: UserState = {
	userInfo: {
		name: 'Igor'
	},
	token: '123'
}

export const UserInfoReducer = createSlice({
	name: 'UserInfoSlice',
	initialState,
	reducers: {
		// setValueOfRow: (state, action) => {
		// 	state.token =  action
		// },

		setToken: (state, action) => {
			state.token = action.payload
		},
		deleteToken: (state) => {
			state.token = ''
		},
		// deleteRowDataOfTable: (state, action) => {
		// 	state.dataTable.splice(action.payload, 1)
		// },
	},
})

export const { setToken, deleteToken } = UserInfoReducer.actions
export const getUserInfoState = (state:UserState)  => state.userInfo
export const getUserTokenState = (state:RootState )  => state.UserReducer.token
export default UserInfoReducer.reducer