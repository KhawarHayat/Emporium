import React, { Component } from 'react';
import '../Scss/time.scss'
import { dateUpdate } from '../Redux/shop/shopAction'
import { connect } from 'react-redux'
import Timer from './Timer';
class TimeInSale extends Component {
    componentDidMount() {
        this.intervel = setInterval(() => {
         this.props.dateUpdate(getTimeRemaining(this.props.date))
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervel)
    }
    render() {
        return (
            <div className='timemain'>
                <div className='time_img_background' style={{ backgroundImage: `url('./Time.jpg')` }}>
                    <p className='timep'>Sale for this fall starts in</p>
                    <div className='timer'>
                        <Timer time={this.props.weeks} label='WEEKS' />
                        <Timer time={this.props.days} label='DAYS' />
                        <Timer time={this.props.hours} label='HOURS' />
                        <Timer time={this.props.minutes} label='MIN' />
                        <Timer time={this.props.seconds} label='SECONDS' />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        date: state.date,
        weeks: state.weeks,
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dateUpdate: (date) => dispatch(dateUpdate(date))
    }
}

function getTimeRemaining(endtime) {
    const time = new Date(endtime.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    const total = Date.parse(time) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24) % 7);
    const weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7))
    return {
        weeks,
        days,
        hours,
        minutes,
        seconds
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeInSale);