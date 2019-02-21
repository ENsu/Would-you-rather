import { GET_USERS, USER_VOTE } from '../actions/users'

export default function users (state={}, action) {
	switch(action.type) {
		case GET_USERS:
			return {
				...action.users
			}
		case USER_VOTE:
			return {
		        ...state,
		        [action.currentUser]: {
		          ...state[action.currentUser],
		          answers: {
		            ...state[action.currentUser].answers,
		            [action.qid]: action.answer
		          }
		        }
			}
		default:
			return state
	}
}