import React, { PureComponent } from 'react';
class PartnerLogo extends PureComponent {
    render() {
        return (
            <>
            <img src={this.props.src} alt='partnerLogo' height='300px' width='300px' />
            </>
        );
    }
}

export default PartnerLogo