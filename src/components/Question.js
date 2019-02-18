import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
       return (

			<div className="card mb-4">
              <div className="card-header">
                {this.props.name} Asks:
              </div>
              <div className="card-body row">
                <div className="col-lg-3">
                  <img className="img-profile rounded-circle" src={this.props.avatar_url}
                  style={{width:'100px'}} />
                </div>
                <div className="col-lg-9">
                  <h4>Would you rather</h4>
                  <p>...p...</p>
                  <a href="#" className="btn btn-primary btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Go to the Poll</span>
                  </a>
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

export default connect(mapStateToProps)(Question)
