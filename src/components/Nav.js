import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'


class Nav extends Component {

	handleLogout = (e) => {
		e.preventDefault()
		console.log("logout happened")
		this.props.dispatch(setAuthedUser(null))
	}

    render() {

       const { Name, AvatarUrl } = this.props	
       return (<div>

        <nav className="navbar navbar-expand bg-white topbar mb-4 static-top shadow">
          <ul className="navbar-nav">

		      <NavLink className="navbar-brand d-flex align-items-center justify-content-center" to="/" exact>
		        <div className="navbar-brand-text mx-3">Would you rather</div>
		      </NavLink>

		      <div className="topbar-divider d-none d-sm-block"></div>

		      <li className="nav-item active">
		        <NavLink className="nav-link" to="/" exact>
		          <span>Find Questions</span></NavLink>
		      </li>
		      <li className="nav-item active">
		        <NavLink className="nav-link" to="/asknew">
		          <span>Ask Questions</span></NavLink>
		      </li>
		      <li className="nav-item active">
		        <NavLink className="nav-link" to="/leaderboard">
		          <span>Leader Board</span></NavLink>
		      </li>
		  </ul>

          <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <div className="nav-link">
                <span className="mr-2 d-none d-lg-inline">{ Name }</span>
                <img className="img-profile rounded-circle" src={ AvatarUrl } alt={ Name }/>
              </div>
            </li>

		    <li className="nav-item active">
		      <button className="nav-link btn btn-link" onClick={this.handleLogout}>
		        <span>Log Out</span></button>
		    </li>

          </ul>

        </nav>

       </div>)
    }
}

function mapStateToProps ({users, authedUser}) {
    return { 
    	Name:users[authedUser]['name'],
    	AvatarUrl: users[authedUser]['avatarURL']
    }
}

export default connect(mapStateToProps)(Nav)
