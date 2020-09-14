import React, { Component } from 'react';
import { Chip } from '@material-ui/core'
import '../Scss/sales.scss'
import ItemCard from './ItemCard';
import Error from './Error'
import { connect } from 'react-redux'
import { fetchItems, clickCategory, addCart } from '../Redux/shop/shopAction';
class Sales extends Component {
    componentDidMount() {
            this.props.fetchItems(this.props.breadCrumb)
    }
    render() {
        const list = this.props.items.map((item) => {
            return <ItemCard id={item.productId} src={item.productElements.image.imgUrl} name={item.productElements.title.title.substring(0, 20)} category={this.props.breadCrumb} price={item.productElements.price.sell_price.formatedAmount} onClick={() => {this.props.addCart(item.productId)}}/>
        })
        let error = <></>
        if(this.props.error === ''){
            error = <></>
        }
        else{
           error =  <Error error={this.props.error} />
        }
        return (
            <div className='salemain' id={this.props.id}>
                <p className='p'>Check out what's new</p>
                <center> <p className='salep'>Latest of the trends we have to offer</p> </center>
                <div className='chips'>
                    <Chip
                        label="Accessories"
                        variant="outlined"
                        size='large'
                        color="secondary"
                        clickable
                        onClick={() => {this.props.clickCategory("Accessories")}}
                    />
                    <Chip
                        label="Clothings"
                        // onClick={handleClick}
                        variant="outlined"
                        size='large'
                        color="secondary"
                        clickable
                        onClick={() => {this.props.clickCategory('Clothes')}}
                    />
                    <Chip
                        label="Shirts"
                        // onClick={handleClick}
                        variant="outlined"
                        size='large'
                        color="secondary"
                        clickable
                        onClick={() => this.props.clickCategory("Shirts")}
                    />
                    <Chip
                        label="Shoes"
                        // onClick={handleClick}
                        variant="outlined"
                        size='large'
                        color="secondary"
                        clickable
                        onClick={() => this.props.clickCategory('Shoes')}
                    />
                    <Chip
                        label="Shorts"
                        // onClick={handleClick}
                        variant="outlined"
                        size='large'
                        color="secondary"
                        clickable
                        onClick={() => this.props.clickCategory('Shorts')}
                    />
                </div>
                <div className='saleItems'>
                    {error}
                   {list}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        breadCrumb: state.breadCrumb,
        search: state.search,
        items: state.items,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (data) => dispatch(fetchItems(data)),
        clickCategory: (data) => dispatch(clickCategory(data)),
        addCart: (data) => dispatch(addCart(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sales);