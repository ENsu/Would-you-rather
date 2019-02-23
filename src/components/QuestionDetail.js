import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserVoteQuestion } from '../actions/shared'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class QuestionDetail extends Component {

    handleVote = (e, option) => {
      e.preventDefault()
      const { question, authedUser } = this.props
      this.props.dispatch(handleUserVoteQuestion(authedUser.id, question.id, option))
    }

    render()  {
       const { validId, question, author, userIsAns, authedUser } = this.props
       
       if (validId === false) {
          return <div>PAGE 404</div>
       }

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
            
            {userIsAns
            ?<div className="col-lg-9">
              <h4>Result</h4>
              <div>
                <span className="h4 font-weight-bold">{ question.optionOne.text }</span>
                {(authedUser['answers'][question.id]==="optionOne") && <span>(You vote this!)</span>}
                <div>{`${question.optionOneRate}(${question.optionOneScore}/${question.totalScore})`}</div>
                <div className="progress mb-4">
                  <div className="progress-bar" role="progressbar" style={{width: question.optionOneRate, ariavaluemin:"0", ariavaluemax:"100"}}></div>
                </div>
              </div>
              <div>
                  <span className="h4 font-weight-bold">{ question.optionTwo.text }</span>
                  {(authedUser['answers'][question.id]==="optionTwo") && <span>(You vote this!)</span>}
                  <div>{`${question.optionTwoRate}(${question.optionTwoScore}/${question.totalScore})`}</div>
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

function mapStateToProps ({ questions, users, authedUser }, props) {
    const { id } = props.match.params
    if (!(id in questions)) {
      return { validId: false }
    }
    let question = questions[id]
    let optionOneScore = question.optionOne.votes.length
    let optionTwoScore = question.optionTwo.votes.length

    return { 
      validId: true,
      question: {...question,
                  optionOneScore: optionOneScore, optionTwoScore: optionTwoScore,
                  totalScore: (optionOneScore + optionTwoScore),
                  optionOneRate: `${(optionOneScore / (optionOneScore + optionTwoScore) * 100).toFixed(1)}%`,
                  optionTwoRate: `${(optionTwoScore / (optionOneScore + optionTwoScore) * 100).toFixed(1)}%`},
      author: users[questions[id]['author']],
      authedUser: users[authedUser],
      userIsAns: Object.keys(users[authedUser]['answers']).filter((key) => key === id).length > 0
    }
}

export default connect(mapStateToProps)(QuestionDetail)
