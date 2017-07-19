import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <button className="btn btn-default" onClick={ this.props.callback }>{ this.props.text }</button>
    }
}

export default Button;