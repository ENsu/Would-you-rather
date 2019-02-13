import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionContainer extends Component {
    render() {
       return (<div>
	       			QuestionContainer
	       			with nested <Question />s
       		   </div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(QuestionContainer)
