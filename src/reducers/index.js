import { combineReducers } from 'redux'
import users from './users'
import currentUser from './currentUser'
// import reducer2 from ‘./reducer2'

export default combineReducers({
    users,
    currentUser
//    reducer2
})
