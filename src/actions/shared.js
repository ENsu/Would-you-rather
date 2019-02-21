import { _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { userVote } from './users'
import { voteQuestion } from './questions'

export function handleUserVoteQuestion(authedUser, qid, answer) {
	return (dispatch) => {
		dispatch(showLoading())
		return _saveQuestionAnswer({authedUser, qid, answer})
			.then(() => {
				dispatch(voteQuestion(authedUser, qid, answer))
				dispatch(userVote(authedUser, qid, answer))
				dispatch(hideLoading())
			})
	}
}