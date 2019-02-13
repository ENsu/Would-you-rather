import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import QuestionContainer from './QuestionContainer'
import QuestionDetail from './QuestionDetail'
import AddQuestion from './AddQuestion'
import LeaderBoard from './LeaderBoard'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
              <Route path='/login' component={Login} />
              <Route path='/home' component={QuestionContainer} />
              <Route path='/question/:id' component={QuestionDetail} />
              <Route path='/addnew' component={AddQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
          </div>
        </div>    
      </Router>
    )
  }
}

function mapStatetoProps ({ }) {
    return {
    }
}

export default connect(mapStatetoProps)(App)

