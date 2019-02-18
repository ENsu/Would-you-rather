import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from './Person'

class LeaderBoard extends Component {
    render() {
       return (<div>
            <Person
            	name="player1"
            	avatar_url="/imgs/avatar1.png"
            	question_cnt="7"
            	ask_cnt="3" 
            />
            <Person
            	name="player2"
            	avatar_url="/imgs/avatar2.png"
            	question_cnt="5"
            	ask_cnt="3" 
            />
       		</div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(LeaderBoard)
