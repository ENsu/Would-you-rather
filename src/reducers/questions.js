import { GET_QUESTIONS, VOTE_QUESTION } from '../actions/questions'

export default function questions (state={}, action) {
	switch(action.type) {
		case GET_QUESTIONS:
			return {
				...action.questions
			}
		case VOTE_QUESTION:
			return {
        		...state,
        		[action.qid]: {
          			...state[action.qid],
          			[action.answer]: {
            			...state[action.qid][action.answer],
            			votes: state[action.qid][action.answer].votes.concat([action.currentUser])
          			}
        		}
      		}
		default:
			return state
	}
}