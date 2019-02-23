import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionContainer extends Component {
	state = {
		list_ans_q: false
	}

	handleSwitch = (e, list_ans_q) => {
		e.preventDefault()
		this.setState((preState) => ({
			list_ans_q: list_ans_q
		}))
	}

    render() {
    	const { list_ans_q } = this.state
       	const questionsIdShowed = list_ans_q
       			? this.props.questionsIdAns
       			: this.props.questionsIdUnans

       return (<div>
	       		<div className="row">
	              <div className="mx-4">
	                <button className="btn btn-link" onClick={(event) => this.handleSwitch(event, true)}>
	                  <h5 style={{"textDecoration": list_ans_q ? "underline" : ""}}> Answered Question </h5>
	                </button>
	              </div>
	              <div className="mx-4">
	                <button className="btn btn-link" onClick={(event) => this.handleSwitch(event, false)}>
	                  <h5 style={{"textDecoration": list_ans_q ? "" : "underline"}}> Unanswered Question </h5>
	                </button>
	              </div>
	            </div>
	            	{ questionsIdShowed.map((id) => (<Question id={id} key={id} />))}
       		   </div>)
    }
}

function mapStateToProps ({questions, users, authedUser}) {
	let questions_ans = []
	let questions_unans = []
	for (let key in questions){
		if(Object.keys(users[authedUser]['answers']).includes(key)){
			questions_ans.push(questions[key])
		} else {
			questions_unans.push(questions[key])
		}
	}

    return { 
    	questionsIdAns: questions_ans.sort((a,b) => b.timestamp - a.timestamp).map((q) => q.id),
    	questionsIdUnans: questions_unans.sort((a,b) => b.timestamp - a.timestamp).map((q) => q.id)
    }
}

export default connect(mapStateToProps)(QuestionContainer)
