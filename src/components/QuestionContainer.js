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
       	const questions_showed = list_ans_q
       			? this.props.questions_ans
       			: this.props.questions_unans

       return (<div>
	       		<div className="row">
	              <div className="mx-4">
	                <a href="#" onClick={(event) => this.handleSwitch(event, true)}>
	                  <h5 style={{"text-decoration": list_ans_q ? "underline" : ""}}> Answered Question </h5>
	                </a>
	              </div>
	              <div className="mx-4">
	                <a href="#" onClick={(event) => this.handleSwitch(event, false)}>
	                  <h5 style={{"text-decoration": list_ans_q ? "" : "underline"}}> Unanswered Question </h5>
	                </a>
	              </div>
	            </div>
	            { questions_showed.map((question) => (
	            	<Question
		            	name={users[question.author]['name']}
		            	avatar_url={users[question.author]['avatarURL']}
	            	/>
	            ))}
       		   </div>)
    }
}

function mapStateToProps ({questions, users, currentUser}, {}) {
	let questions_ans = []
	let questions_unans = []
	for (let key in questions){
		if(users[currentUser]['questions'].includes(key)){
			questions_ans.push(questions[key])
		} else {
			questions_unans.push(questions[key])
		}
	}
    return { 
    	questions_ans: questions_ans.sort((a,b) => b.timestamp - a.timestamp),
    	questions_unans: questions_unans.sort((a,b) => b.timestamp - a.timestamp),
    	users: users
    }
}

export default connect(mapStateToProps)(QuestionContainer)
