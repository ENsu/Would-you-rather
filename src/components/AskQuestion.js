import React, { Component } from 'react'
import { connect } from 'react-redux'

class AskQuestion extends Component {
    render() {
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
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Option A" />
                    </div>
                    <div className="my-2">Or....</div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Option B" />
                    </div>
                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                      Ask
                    </a>
                  </form>
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

export default connect(mapStateToProps)(AskQuestion)

