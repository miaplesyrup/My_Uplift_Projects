import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    
    render() { 
        const classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning : "primary";
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button className="btn">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        const x = <h1>Zero</h1>
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;