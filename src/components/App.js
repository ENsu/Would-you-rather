import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import QuestionContainer from './QuestionContainer'
import QuestionDetail from './QuestionDetail'
import AskQuestion from './AskQuestion'
import LeaderBoard from './LeaderBoard'
import "../utils/sb-admin-2.css"

import { handleGetUsers } from '../actions/users'
import { handleGetQuestions } from '../actions/questions'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <div>
          {authedUser === null ? null : <Nav />}
          <div className="container">
            <div className="col-lg-6 mx-auto">
              {authedUser === null
                ? <Login />
                :
              <div> 
                <Route path='/' exact component={QuestionContainer} />
                <Route path='/question/:id' component={QuestionDetail} />
                <Route path='/asknew' component={AskQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </div>
              }
            </div>
          </div>
        </div>    
      </Router>
    )
  }
}

function mapStatetoProps ({authedUser}) {
    return {
      authedUser: authedUser
    }
}

export default connect(mapStatetoProps)(App)

