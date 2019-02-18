import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {
    render() {
       return (
            <div class="card mb-4">
              <div class="card-header">
                Rank 1:
              </div>
              <div class="card-body row">
                <div class="col-lg-3">
                  <img class="img-profile rounded-circle" src={this.props.avatar_url} alt=""
                  style={{width:"100px"}} />
                </div>
                <div class="col-lg-9">
                  <h4>{this.props.name}</h4>
                  <div>
                    <span class="h6 font-weight-bold">Answered {this.props.question_cnt} Questions</span>
                  </div>
                  <div>
                      <span class="h6 font-weight-bold">Ask {this.props.ask_cnt} Questions</span>
                  </div>
                  <hr />
                  <div>
                      <span class="h6 font-weight-bold">Get {parseInt(this.props.question_cnt) + parseInt(this.props.ask_cnt)} Scores</span>
                  </div>
                </div>
              </div>
            </div>
       )
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(Person)
