import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from './Person'

class LeaderBoard extends Component {
    render() {
       const { rankedUsersId } = this.props

       return (<div>
            {
                rankedUsersId.map((id, index) => <Person id={id} rank={index+1} key={id} />)
            }
            </div>)
    }
}

function mapStateToProps ({users}) {

    return { 
        rankedUsersId: Object.keys(users).map((k) => users[k]).sort((a,b) => (
            Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
        ).map((p) => p.id)
    }
}

export default connect(mapStateToProps)(LeaderBoard)
