/* globals window */
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import Thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'

import patientReducer from 'Reducers/patient_reducer'


const configure = (initialState = {}) => {
	const reducer = combineReducers({
		form,
		patient: patientReducer
	})

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	const store = createStore(reducer, initialState, composeEnhancers(
		applyMiddleware(Thunk),
	))

	return store
}

export default configure

