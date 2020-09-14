import React, { Component } from 'react';
import '../Scss/time.scss'
class Timer extends Component {
    render() {
        return (
            <div className='timediv'>
                <p>{this.props.time}</p>
                <label>{this.props.label}</label>
            </div>
        );
    }
}

export default Timer;