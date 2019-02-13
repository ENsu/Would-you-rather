import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {
    render() {
       return (<div>Person</div>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(Person)
