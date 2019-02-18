import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import QuestionContainer from './QuestionContainer'
import QuestionDetailUnans from './QuestionDetailUnans'
import QuestionDetailAns from './QuestionDetailAns'
import AskQuestion from './AskQuestion'
import LeaderBoard from './LeaderBoard'
import "../utils/sb-admin-2.css"



class App extends Component {


  render() {
    const { currentUser } = this.props
    return (
      <Router>
        <div>
          {currentUser === null ? null : <Nav />}
          <div className="container">
            <div className="col-lg-6 mx-auto">
              {currentUser === null
                ? <Login />
                :
              <div> 
                <Route path='/' component={QuestionContainer} />
                <Route path='/question_un/:id' component={QuestionDetailUnans} />
                <Route path='/question_ans/:id' component={QuestionDetailAns} />
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

function mapStatetoProps ({currentUser}) {
    return {
      currentUser: currentUser
    }
}

export default connect(mapStatetoProps)(App)

