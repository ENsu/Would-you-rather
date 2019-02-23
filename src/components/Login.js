import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'




class Login extends Component {
	state = {
		dropdown_toggle: false,
		pick_user_id: null,
	}

	dropdownToggle = () => {
		this.setState((preState) => ({
			dropdown_toggle: !preState.dropdown_toggle
		}))
	}

	handlePickUser = (e, key) => {
		e.preventDefault()
		this.setState((preState) => ({
			pick_user_id: key
		}))
	}

	handleLogin = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(this.state.pick_user_id))
	}

    render() {

       const { users } = this.props
       const avatar_url = this.state.pick_user_id !== null
       		? users[this.state.pick_user_id].avatarURL
       		: "/imgs/null.png"

       return (

        <div className="card o-hidden border-0 shadow-lg my-5
        col-xl-9 col-lg-9 col-md-9">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-12 d-none d-lg-block">
                <img src={avatar_url} style={{width:'100%'}} alt="user_avataar"/>
              </div>
            </div>
            <div className="row">
	            <div className="p-5">
	              <div className="text-center">
	                <h1 className="h4 text-gray-900 mb-4">Join the Would-You-Rather Game</h1>
	              </div>
	              <form className="user">
	                <div className="dropdown mb-4" onClick={this.dropdownToggle}>
	                  <button className="btn btn-primary btn-user dropdown-toggle btn-block" type="button" id="dropdownMenuButton"
	                   >
	                    { this.state.pick_user_id === null
	                    	? "Pick a player"
	                    	:users[this.state.pick_user_id]['name']}
	                  </button>
	                  <div className={`dropdown-menu animated--fade-in${this.state.dropdown_toggle? " show":""}`}>
	                    {Object.keys(users).map((key) =>
	                    	(<button key={key} className="dropdown-item"
	                    		onClick={(event) => (this.handlePickUser(event, key))}
	                    		>{users[key]['name']}</button>
	                    ))}
	                  </div>
	                </div>
	                <button className="btn btn-primary btn-user btn-block"
	                onClick={this.handleLogin}>
	                  Login
	                </button>
	              </form>
	            </div>
            </div>
          </div>
        </div>

       )
    }
}

function mapStateToProps ({users}) {

    return { 
    	users: users,
    	loading: users === []
    }
}

export default connect(mapStateToProps)(Login)
