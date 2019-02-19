import { _getQuestions } from '../utils/_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'

export function getQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions: questions
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