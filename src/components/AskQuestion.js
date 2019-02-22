import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserAskQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'


class AskQuestion extends Component {

    state = {
      optionOneText: '',
      optionTwoText: '',
      redirect: false
    }

    handleChange = (e, inputOption) => {
      const text = e.target.value
      if(inputOption === "optionOneText"){
        this.setState(() => ({
          optionOneText: text
        }))       
      } else {
        this.setState(() => ({
          optionTwoText: text
        }))         
      }
    }

    handleAsk = (e) => {
      e.preventDefault()
      const { optionOneText, optionTwoText } = this.state
      this.props.dispatch(handleUserAskQuestion(optionOneText, optionTwoText))
      this.setState(() => ({
        redirect: true
      }))
      // how can I find the id of the question so I can directly go to the related QuestionDetail page?
    }

    render() {

      const { redirect, optionOneText, optionTwoText } = this.state
      const cannot_ask = ((optionOneText === "") || (optionTwoText === ""))

      if (redirect === true) {
        return <Redirect to='/' /> 
      }

       return (
            <div className="card mb-4">
              <div className="card-header">
                Ask a new question:
              </div>
              <div className="card-body row">
                <div className="col-lg-9">
                  <h4>Would you rather</h4>
                  <form>
                    <div className="form-group">
                      <input className="form-control form-control-user" value={optionOneText} placeholder="Option A" 
                             onChange={(event) => this.handleChange(event, 'optionOneText')}/>
                    </div>
                    <div className="my-2">Or....</div>
                    <div className="form-group">
                      <input className="form-control form-control-user" value={optionTwoText} placeholder="Option B" 
                             onChange={(event) => this.handleChange(event, 'optionTwoText')} />
                    </div>
                    <button className="btn btn-primary btn-user btn-block" onClick={this.handleAsk}
                      disabled={cannot_ask}>
                      Ask
                    </button>
                  </form>
                </div>
              </div>
            </div>
)
    }
}

export default connect()(AskQuestion)

