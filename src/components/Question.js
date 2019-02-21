import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    render() {

      const { id, user } = this.props

      return (
			   <div className="card mb-4">
          <div className="card-header">
            {user.name} Asks:
          </div>
          <div className="card-body row">
            <div className="col-lg-3">
              <img className="img-profile rounded-circle" src={user.avatarURL}
                   style={{width:'100px'}} />
            </div>
            <div className="col-lg-9">
              <h4>Would you rather</h4>
              <p>...p...</p>
              <Link to={`/question/${id}`} className="btn btn-primary btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-flag"></i>
                    </span>
                    <span className='text'>Go to the Poll</span>
              </Link>
            </div>
          </div>
        </div>

    	)
    }
}

function mapStateToProps ({ questions, users }, {id}) {

    return { 
      id,
      user: users[questions[id]['author']]
    }
}

export default connect(mapStateToProps)(Question)
