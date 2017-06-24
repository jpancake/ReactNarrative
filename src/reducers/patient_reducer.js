import { SET_NARRATIVE } from '../actions/types'

export default function patientReducer(state = {}, action) {
	switch (action.type) {
	case SET_NARRATIVE:
		return action.payload
	default:
		return state
	}
}
