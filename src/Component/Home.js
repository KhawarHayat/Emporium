import React, { Component } from 'react';
import Carousel0 from './Carousel';
import Carousel1 from './Carousel1';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from '../Scss/paper.module.css'
class Home extends Component {
    render() {
        return (
            <div id={this.props.id}>
                <Carousel className={style.Carousel} autoPlay interval={7000} infiniteLoop showThumbs={false}>
                    <Carousel0 />
                    <Carousel1 />
                </Carousel>
            </div>
        )
    }
}

export default Home;