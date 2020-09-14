import React, { Component } from 'react';
import PartnerLogo from './PartnerLogo'
import "../Scss/partner.scss"
import Slider from 'infinite-react-carousel';
class Partner extends Component {
    render() {
        return (
            <div id={this.props.id}>
            <Slider autoplay arrows={false} slidesToShow={4} autoplayScroll={1} autoplaySpeed={2000} className='partnerDesktop'>
            <PartnerLogo src='./Khaadi.jpg'/>
            <PartnerLogo src='./nishat.png'/>
            <PartnerLogo src='./GulAhmed.png'/>
            <PartnerLogo src='./Chenone.jpg'/>
            <PartnerLogo src='./HSY.jpg'/>
            <PartnerLogo src='./Bareeze.jpg'/>
            </Slider>
            <Slider autoplay arrows={false} slidesToShow={3} autoplayScroll={1} autoplaySpeed={2000} className='partnerTablet'>
            <PartnerLogo src='./Khaadi.jpg'/>
            <PartnerLogo src='./nishat.png'/>
            <PartnerLogo src='./GulAhmed.png'/>
            <PartnerLogo src='./Chenone.jpg'/>
            <PartnerLogo src='./HSY.jpg'/>
            <PartnerLogo src='./Bareeze.jpg'/>
            </Slider>
            <Slider autoplay arrows={false} slidesToShow={2} autoplayScroll={1} autoplaySpeed={2000} className='partnerTab'>
            <PartnerLogo src='./Khaadi.jpg'/>
            <PartnerLogo src='./nishat.png'/>
            <PartnerLogo src='./GulAhmed.png'/>
            <PartnerLogo src='./Chenone.jpg'/>
            <PartnerLogo src='./HSY.jpg'/>
            <PartnerLogo src='./Bareeze.jpg'/>
            </Slider>
            <Slider autoplay arrows={false} slidesToShow={1} autoplayScroll={1} autoplaySpeed={2000} className='partnerMobile'>
            <PartnerLogo src='./Khaadi.jpg'/>
            <PartnerLogo src='./nishat.png'/>
            <PartnerLogo src='./GulAhmed.png'/>
            <PartnerLogo src='./Chenone.jpg'/>
            <PartnerLogo src='./HSY.jpg'/>
            <PartnerLogo src='./Bareeze.jpg'/>
            </Slider>
            </div>
        );
    }
}

export default Partner;