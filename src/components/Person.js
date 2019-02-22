import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {
    render() {
       const { user, rank } = this.props

       return (
            <div className="card mb-4">
              <div className="card-header">
                Rank { rank }:
              </div>
              <div className="card-body row">
                <div className="col-lg-3">
                  <img className="img-profile rounded-circle" src={user.avatarURL} alt=""
                  style={{width:"100px"}} />
                </div>
                <div className="col-lg-9">
                  <h4>{user.name}</h4>
                  <div>
                    <span className="h6 font-weight-bold">Answered {user.q_cnt} Questions</span>
                  </div>
                  <div>
                      <span className="h6 font-weight-bold">Ask {user.ans_cnt} Questions</span>
                  </div>
                  <hr />
                  <div>
                      <span className="h6 font-weight-bold">Get {parseInt(user.q_cnt) + parseInt(user.ans_cnt)} Scores</span>
                  </div>
                </div>
              </div>
            </div>
       )
    }
}

function mapStateToProps ({users}, { id, rank }) {
    return { 
      user: {...users[id],
              q_cnt:users[id]['questions'].length,
              ans_cnt:Object.keys(users[id]['answers']).length
          },
      rank
    }
}

export default connect(mapStateToProps)(Person)
