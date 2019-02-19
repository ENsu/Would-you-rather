import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import currentUser from './currentUser'
// import reducer2 from ‘./reducer2'

export default combineReducers({
    users,
    questions,
    currentUser
//    reducer2
})
