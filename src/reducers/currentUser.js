import { SET_CURRENT_USER } from '../actions/currentUser'

export default function authedUser (state=null, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return action.id
		default:
			return state
	}
}