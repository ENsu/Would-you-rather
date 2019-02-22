import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserVoteQuestion } from '../actions/shared'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class QuestionDetail extends Component {

    handleVote = (e, option) => {
      e.preventDefault()
      const { question, current_user } = this.props
      this.props.dispatch(handleUserVoteQuestion(current_user.id, question.id, option))
    }

    render()  {
       const { question, author, user_is_ans, current_user } = this.props

       return (

        <div className="card mb-4">
          <div className="card-header">
            { author.name } Asks:
          </div>
          <div className="card-body row">
            <div className="col-lg-3">
              <img className="img-profile rounded-circle" src={author.avatarURL}
              style={{width:"100px"}} alt={author.name} />
            </div>
            
            {user_is_ans
            ?<div className="col-lg-9">
              <h4>Result</h4>
              <div>
                <span className="h4 font-weight-bold">{ question.optionOne.text }</span>
                {(current_user['answers'][question.id]==="optionOne") && <span>(You vote this!)</span>}
                <div>{question.optionOneRate}</div>
                <div className="progress mb-4">
                  <div className="progress-bar" role="progressbar" style={{width: question.optionOneRate, ariavaluemin:"0", ariavaluemax:"100"}}></div>
                </div>
              </div>
              <div>
                  <span className="h4 font-weight-bold">{ question.optionTwo.text }</span>
                  {(current_user['answers'][question.id]==="optionTwo") && <span>(You vote this!)</span>}
                  <div>{question.optionTwoRate}</div>
                  <div className="progress mb-4">
                  <div className="progress-bar" role="progressbar" style={{width: question.optionTwoRate, ariavaluemin:"0", ariavaluemax:"100"}}></div>
                </div>
              </div>
            </div>
            :<div className="col-lg-9">
             <h4>Would you rather</h4>
              <div>
                    <button className="btn btn-success btn-circle btn-small" onClick={(event) => this.handleVote(event, "optionOne")}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <span className="h4 font-weight-bold">{ question.optionOne.text }</span>
              </div>
              <div className="my-2">Or....</div>
              <div>
                  <button className="btn btn-success btn-circle" onClick={(event) => this.handleVote(event, "optionTwo")}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <span className="h4 font-weight-bold">{ question.optionTwo.text }</span>
              </div>
            </div>
            }
          </div>
        </div>


       	)
    }
}

function mapStateToProps ({ questions, users, currentUser }, props) {
    const { id } = props.match.params
    let question = questions[id]
    let optionOneScore = question.optionOne.votes.length
    let optionTwoScore = question.optionTwo.votes.length

    return { 
      question: {...question, 
                  optionOneRate: `${(optionOneScore / (optionOneScore + optionTwoScore) * 100).toFixed(1)}%`,
                  optionTwoRate: `${(optionTwoScore / (optionOneScore + optionTwoScore) * 100).toFixed(1)}%`},
      author: users[questions[id]['author']],
      current_user: users[currentUser],
      user_is_ans: Object.keys(users[currentUser]['answers']).filter((key) => key === id).length > 0
    }
}

export default connect(mapStateToProps)(QuestionDetail)
