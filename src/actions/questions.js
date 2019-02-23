import { _getQuestions } from '../utils/_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'
export const ASK_QUESTION = 'ASK_QUESTION'

export function getQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export function voteQuestion (authedUser, qid, answer) {
    return {
        type: VOTE_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function askQuestion (question) {

    return {
        type: ASK_QUESTION,
        question
    }
}

// add a handler to to asynchronous API calls during the dispatch
// require redux-thunk middleware
export function handleGetQuestions () {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions))
            })
    }
}

