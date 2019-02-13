import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends Component {
    render() {
       return (<div>QuestionDetail</div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(QuestionDetail)
