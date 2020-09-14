import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Breadcrumbs, Link, List, ListItem, ListItemText, Backdrop, CircularProgress } from '@material-ui/core';
import '../Scss/theme.scss'
import Footer from './Footer';
import Error from './Error'
import ItemCard from './ItemCard';
import { connect } from 'react-redux'
import { fetchItems, clickCategory, addCart } from '../Redux/shop/shopAction';
class ThemePage extends Component {
    componentDidMount() {
        if (this.props.search === '') {
            this.props.fetchItems(this.props.breadCrumb)
        }
        else {
            this.props.fetchItems(this.props.search)
        }
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
        let load = <></>
        if(this.props.loading){
           load = <div className='backdrop' >
           <CircularProgress color="inherit" />
            </div>
          
        }
        return (
            <div className='ThemeMain'>
            {load}
                <AppBar position="static" color='inherit' className='ThemeAppBar'>
                    <Toolbar className='ThemeToolbar'>
                        <Typography variant="h4" >
                            Shop
                        </Typography>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="#Home">
                                Home
                            </Link>
                            <Typography color="textPrimary">{this.props.breadCrumb}</Typography>
                        </Breadcrumbs>
                    </Toolbar>
                </AppBar>
                <div className='ThemePage'>
                    <div className='ThemeDrawer'>
                        <p className='ThemeDrawerHeading'>Products Category</p>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button className='ThemeListItem' onClick={ () => {this.props.clickCategory("Accessories")}}>
                                <ListItemText primary="ACCESSORIES" />
                            </ListItem>
                            <ListItem button className='ThemeListItem' onClick={ () => {this.props.clickCategory("Clothes")}}>
                                <ListItemText primary="CLOTHINGS" />
                            </ListItem>
                            <ListItem button className='ThemeListItem' onClick={() => {this.props.clickCategory("Shirts")}}>
                                <ListItemText primary="SHIRTS" />
                            </ListItem>
                            <ListItem button className='ThemeListItem' onClick={() => {this.props.clickCategory("Shoes")}}>
                                <ListItemText primary="SHOES" />
                            </ListItem>
                            <ListItem button className='ThemeListItem' onClick={() => {this.props.clickCategory("Shorts")}}>
                                <ListItemText primary="SHORTS" />
                            </ListItem>
                        </List>
                    </div>
                    <div className='ThemeMain'>
                        {error}
                        {list}
                    </div>
                </div>
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemePage);