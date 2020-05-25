import React, { Component } from 'react'

class JSXDiff extends Component {
    render() {
        //return <h2>This is an example of JSX.</h2>
        //return React.createElement("h2", null, "This is react element example")
        return React.createElement("div", null, React.createElement("h2", null, "This is react child element example"))
    }
}

export default JSXDiff