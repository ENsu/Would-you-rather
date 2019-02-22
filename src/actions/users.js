import { _getUsers } from '../utils/_DATA'

export const GET_USERS = 'GET_USERS'
export const USER_VOTE = 'USER_VOTE'
export const USER_ASK = 'USER_ASK'

export function getUsers (users) {
    return {
        type: GET_USERS,
        users: users
    }
}

export function userVote (authedUser, qid, answer) {
    return {
        type: USER_VOTE,
        authedUser,
        qid,
        answer
    }  
}

export function userAsk (authedUser, qid) {
    return {
        type: USER_ASK,
        qid,
        authedUser
    }
}

// add a handler to to asynchronous API calls during the dispatch
// require redux-thunk middleware
export function handleGetUsers () {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(getUsers(users))
            })
    }
}

