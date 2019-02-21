import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionContainer extends Component {
	state = {
		list_ans_q: true
	}

	handleSwitch = (e, list_ans_q) => {
		e.preventDefault()
		this.setState((preState) => ({
			list_ans_q: list_ans_q
		}))
	}

    render() {
    	const { users } = this.props
    	const { list_ans_q } = this.state
       	const questions_id_showed = list_ans_q
       			? this.props.questions_id_ans
       			: this.props.questions_id_unans

       return (<div>
	       		<div className="row">
	              <div className="mx-4">
	                <a href="#" onClick={(event) => this.handleSwitch(event, true)}>
	                  <h5 style={{"textDecoration": list_ans_q ? "underline" : ""}}> Answered Question </h5>
	                </a>
	              </div>
	              <div className="mx-4">
	                <a href="#" onClick={(event) => this.handleSwitch(event, false)}>
	                  <h5 style={{"textDecoration": list_ans_q ? "" : "underline"}}> Unanswered Question </h5>
	                </a>
	              </div>
	            </div>
	            	{ questions_id_showed.map((id) => (<Question id={id} key={id} />))}
       		   </div>)
    }
}

function mapStateToProps ({questions, users, currentUser}, {}) {
	let questions_ans = []
	let questions_unans = []
	for (let key in questions){
		if(Object.keys(users[currentUser]['answers']).includes(key)){
			questions_ans.push(questions[key])
		} else {
			questions_unans.push(questions[key])
		}
	}

    return { 
    	questions_id_ans: questions_ans.sort((a,b) => b.timestamp - a.timestamp).map((q) => q.id),
    	questions_id_unans: questions_unans.sort((a,b) => b.timestamp - a.timestamp).map((q) => q.id),
    	users: users
    }
}

export default connect(mapStateToProps)(QuestionContainer)
