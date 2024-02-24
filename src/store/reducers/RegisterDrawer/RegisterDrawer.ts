import {createSelector, createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {RegisterDrawerState} from './type'

const initialState: RegisterDrawerState = {
	showDrawer: false,
}

export const RegisterDrawerReducer = createSlice({
	name: 'RegisterDrawerSlice',
	initialState,
	reducers: {
		// setValueOfRow: (state, action) => {
		// 	state.token =  action
		// },

		setShowDrawer: (state, action) => {
			// console.log('action: ', action)
			// state.showDrawer = action.payload
			state.showDrawer = action.payload
		},
		// deleteRowDataOfTable: (state, action) => {
		// 	state.dataTable.splice(action.payload, 1)
		// },
	},
})

export const { setShowDrawer } = RegisterDrawerReducer.actions
export const getShowDrawer = (state:RootState)  => state.RegisterDrawer.showDrawer
export default RegisterDrawerReducer.reducer