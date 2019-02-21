import { _getUsers } from '../utils/_DATA'

export const GET_USERS = 'GET_USERS'
export const USER_VOTE = 'USER_VOTE'

export function getUsers (users) {
    return {
        type: GET_USERS,
        users: users
    }
}

export function userVote (currentUser, qid, answer) {
    return {
        type: USER_VOTE,
        currentUser,
        qid,
        answer
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

