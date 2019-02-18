import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class QuestionDetailUnans extends Component {

    render() {
       return (

        <div class="card mb-4">
          <div class="card-header">
            Player1 Asks:
          </div>
          <div class="card-body row">
            <div class="col-lg-3">
              <img class="img-profile rounded-circle" src="/imgs/avatar1.png"
              style={{width:'100px'}} />
            </div>
            <div class="col-lg-9">
              <h4>Would you rather</h4>
              <div>
                    <a href="#" class="btn btn-success btn-circle btn-small">
                      <FontAwesomeIcon icon={faCheck} />
                    </a>
                    <span class="h4 font-weight-bold">Option A</span>
              </div>
              <div class="my-2">Or....</div>
              <div>
                  <a href="#" class="btn btn-success btn-circle">
                    <FontAwesomeIcon icon={faCheck} />
                  </a>
                  <span class="h4 font-weight-bold">Option B</span>
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

export default connect(mapStateToProps)(QuestionDetailUnans)
