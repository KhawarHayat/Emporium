import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Catagories from './Catagories';
import TimeInSale from './TimeInSale';
import Sales from './Sales';
import Subscribe from './Subscribe'
import Partner from './Partner';
import Shipment from './Shipment';
import Footer from './Footer';

class MyApp extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home id='Home' />
                <Catagories id="Category" />
                <TimeInSale />
                <Sales id='Products' />
                <Subscribe id='Subscribe' />
                <Partner id='Partner' />
                <Shipment />
                <Footer />
            </div>
        );
    }
}

export default MyApp;