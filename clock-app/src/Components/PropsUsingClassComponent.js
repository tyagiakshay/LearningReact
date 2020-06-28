import React, { Component } from 'react'

class PropsUsingClassComponent extends Component {
    render() {
        return(<h2>Hey, your typed class props are : {this.props.firstname} and {this.props.lastname}</h2>)
    }
}
export default PropsUsingClassComponent