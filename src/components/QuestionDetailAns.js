import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetailAns extends Component {

    render() {
       return (

        <div class="card mb-4">
          <div class="card-header">
            Player1 Asks:
          </div>
          <div class="card-body row">
            <div class="col-lg-3">
              <img class="img-profile rounded-circle" src="/imgs/avatar1.png"
              style={{width:"100px"}}/>
            </div>
            <div class="col-lg-9">
              <h4>Result</h4>
              <div>
                <span class="h4 font-weight-bold">Option A</span><span>(you vote this.)</span><span class="float-right">70%</span>
                <div class="progress mb-4">
                  <div class="progress-bar" role="progressbar" style={{width: "70%", ariavaluenow:"75", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                </div>
              </div>
              <div>
                  <span class="h4 font-weight-bold">Option B</span><span class="float-right">30%</span>
                  <div class="progress mb-4">
                  <div class="progress-bar" role="progressbar" style={{width: "30%", ariavaluenow:"75", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                </div>
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

export default connect(mapStateToProps)(QuestionDetailAns)
