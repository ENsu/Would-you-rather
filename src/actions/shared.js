import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { userVote, userAsk } from './users'
import { voteQuestion, askQuestion } from './questions'

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

export function handleUserAskQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { currentUser } = getState()
        const author = currentUser
        const question = { author, optionOneText, optionTwoText }

        return _saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(askQuestion(formattedQuestion))
                dispatch(userAsk(currentUser, formattedQuestion.id))
            })
    }
}