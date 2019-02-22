import { GET_USERS, USER_VOTE, USER_ASK } from '../actions/users'

export default function users (state={}, action) {
	switch(action.type) {
		case GET_USERS:
			return {
				...action.users
			}
		case USER_VOTE:
			return {
		        ...state,
		        [action.authedUser]: {
		          ...state[action.authedUser],
		          answers: {
		            ...state[action.authedUser].answers,
		            [action.qid]: action.answer
		          }
		        }
			}
		case USER_ASK:
			return {
		        ...state,
		        [action.authedUser]: {
		          ...state[action.authedUser],
		          questions: state[action.authedUser].questions.concat([action.qid])
		        }
      		}
		default:
			return state
	}
}