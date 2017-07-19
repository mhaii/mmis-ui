import React, { Component } from 'react';

import Button from '../components/button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 30 };
    }

    plusCallback    = (e) => { this.setState({ number: this.state.number + 1 }) }
    minusCallback   = (e) => { this.setState({ number: this.state.number - 1 }) }

    render() {
        return (
            <div className="input-group">
                <div className="input-group-btn"><Button callback={ this.minusCallback } text="-" /></div>
                <div className="form-control">{ this.state.number }</div>
                <div className="input-group-btn"><Button callback={ this.plusCallback } text="+" /></div>
            </div>
        )
    }
}

export default Counter;
