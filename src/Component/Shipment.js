import React, { Component } from 'react';
import '../Scss/ship.scss'
import {FaCreditCard ,FaPlane, FaCcMastercard, FaCcVisa, FaCcPaypal} from 'react-icons/fa'
class Shipment extends Component {
    render() {
        return (
            <div className='shipmain'>
                <div className='shippayment'>
                 <FaCreditCard className="shipicon"/>
                 <p className='shipTitle'>Payment Method</p>
                 <p className='shipdescription'>You can pay throught these credit cards </p>
                 <div className='shipcards'>
                 <FaCcMastercard className="shipicon"/>
                 <FaCcVisa className="shipicon"/>
                 <FaCcPaypal className="shipicon"/>
                 </div>
                </div>
                <div className='shipdelivery'>
                 <FaPlane className='shipicon' />
                 <p className='shipTitle'>Shipment & Delivery</p>
                 <p className='shipdescription'>You will get the delivery at doorstep</p>
                </div>
            </div>
        );
    }
}

export default Shipment;