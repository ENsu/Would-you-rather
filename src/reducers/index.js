import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import authedUser from './authedUser'
// import reducer2 from ‘./reducer2'

export default combineReducers({
    users,
    questions,
    authedUser
})
