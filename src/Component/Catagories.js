import React, { Component } from 'react';
import '../Scss/category.scss'
import { redirected, clickCategory } from '../Redux/shop/shopAction'
import {connect} from 'react-redux'

class Catagories extends Component {
    handleClick = (data) => {
     this.props.clickCategory(data)
     this.props.redirected()
    }
    render() {
        return (
            <div className='categorymain' id={this.props.id}>
                <div className='img_background' style={{ backgroundImage: `url('./Category3.jpg')` }} onClick={() => {this.handleClick('Clothes')}}>
                    <div className='info'>
                        <p>Clothing</p>
                    </div>
                </div>
                <div className='img_background' style={{ backgroundImage: `url('./Category2.jpg')` }} onClick={() => {this.handleClick('Accessories')}}>
                    <div className='info'>
                        <p>Accessories</p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        redirect: state.redirect,
        breadCrumb: state.breadCrumb
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirected: () => dispatch(redirected()),
        clickCategory: (data) => dispatch(clickCategory(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Catagories);