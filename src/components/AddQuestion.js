import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddQuestion extends Component {
    render() {
       return (<div>AddQuestion</div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
        }
}

export default connect(mapStateToProps)(AddQuestion)

