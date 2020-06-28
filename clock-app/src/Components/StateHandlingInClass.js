import React, { Component } from 'react'

class StateHandlingInClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increament() 
    {
        this.setState(prevState => ({
        count: prevState.count+1
        }))
    }
    render() {
        return(
            <div>
                <h2> Counter is : {this.state.count}</h2>
                <button onClick={()=>this.increament()}>Click to Increase Counter by 1.</button>
            </div>
        )
    }
}
export default StateHandlingInClass