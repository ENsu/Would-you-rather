import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from './Person'

class LeaderBoard extends Component {
    render() {
       return (<div>
       			LeaderBoard:
       			with nested <Person />s
       		   </div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(LeaderBoard)
