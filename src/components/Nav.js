import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
    render() {
       return (<div>Nav</div>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(Nav)