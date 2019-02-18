import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionContainer extends Component {
    render() {
       return (<div>
	       		<div className="row">
	              <div className="mx-4">
	                <a href="#">
	                  <h5><u> Answered Question </u></h5>
	                </a>
	              </div>
	              <div className="mx-4">
	                <a href="#">
	                  <h5> Unanswered Question </h5>
	                </a>
	              </div>
	            </div>
	            <Question
	            	name="player1"
	            	avatar_url="/imgs/avatar1.png"
	            />
	            <Question
	            	name="player2"
	            	avatar_url="/imgs/avatar2.png"
	            />
       		   </div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(QuestionContainer)
