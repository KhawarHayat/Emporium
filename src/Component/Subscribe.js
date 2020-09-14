import React, { Component } from 'react';
import '../Scss/subscribe.scss'
import { Button } from '@material-ui/core'
class Subscribe extends Component {
    render() {
        return (
            <div className='subscribemain' id={this.props.id}>
                <div className='subscribeBackground' style={{ backgroundImage: `url('./Subscribe1.jpg')` }}>
                    <div className='subscribeInfo'>
                        <p className='subscribep'>Subscribe to get discount coupons & new offers!</p>
                        <div className='subscribeInput'>
                        <input className='subscribeField' placeholder="Your Email Here" type='email'/>
                        <Button className='subscribeButton'>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;