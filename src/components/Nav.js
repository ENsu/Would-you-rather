import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'


class Nav extends Component {
	handleLogout = (e) => {
		e.preventDefault()
		this.props.dispatch(setCurrentUser(null))
	}

    render() {

       const { Name, AvatarUrl } = this.props	
       return (<div>

        <nav className="navbar navbar-expand bg-white topbar mb-4 static-top shadow">
          <ul className="navbar-nav">

		      <a className="navbar-brand d-flex align-items-center justify-content-center" href="home">
		        <div className="navbar-brand-text mx-3">Would you rather</div>
		      </a>

		      <div className="topbar-divider d-none d-sm-block"></div>

		      <li className="nav-item active">
		        <a className="nav-link" href="home">
		          <span>Find Questions</span></a>
		      </li>
		      <li className="nav-item active">
		        <a className="nav-link" href="asknew">
		          <span>Ask Questions</span></a>
		      </li>
		      <li className="nav-item active">
		        <a className="nav-link" href="leaderboard">
		          <span>Leader Board</span></a>
		      </li>
		  </ul>

          <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <div className="nav-link">
                <span className="mr-2 d-none d-lg-inline">{ Name }</span>
                <img className="img-profile rounded-circle" src={ AvatarUrl }/>
              </div>
            </li>

		    <li className="nav-item active">
		      <a className="nav-link" href="#" onClick={this.handleLogout}>
		        <span>Log Out</span></a>
		    </li>

          </ul>

        </nav>

       </div>)
    }
}

function mapStateToProps ({users, currentUser}, {}) {
    return { 
    	Name:users[currentUser]['name'],
    	AvatarUrl: users[currentUser]['avatarURL']
    }
}

export default connect(mapStateToProps)(Nav)
