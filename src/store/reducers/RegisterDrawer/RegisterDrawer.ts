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
		setShowDrawer: (state, action) => {
			state.showDrawer = action.payload
		},
	},
})

export const { setShowDrawer } = RegisterDrawerReducer.actions
export const getShowDrawer = (state:RootState)  => state.RegisterDrawer.showDrawer
export default RegisterDrawerReducer.reducer