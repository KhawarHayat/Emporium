import React, { Component } from 'react';
import { Divider, Badge, Input, IconButton , Grow } from '@material-ui/core'
import { addCart, searchIt, menuClick, searchButtonToggel, redirected } from '../Redux/shop/shopAction'
import { FaShoppingCart, FaSearch, FaTimes } from 'react-icons/fa'
import HamburgerMenu from 'react-hamburger-menu'
import style from '../Scss/header.module.css'
import { connect } from 'react-redux'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Redirect } from 'react-router-dom';
class Header extends Component {

    render() {
        let redirection;
        let searchFeild;
        let hammenu;
        if (this.props.menuOpen) {
            hammenu = <div className={style.hammenu}>
                <AnchorLink offset={10} animationduration={1000} href='#Home' className={style.a}>Home</AnchorLink>
                <AnchorLink offset={10} animationduration={1000} href='#Category' className={style.a}>Categories</AnchorLink>
                <AnchorLink offset={10} animationduration={1000} href='#Products' className={style.a}>Products</AnchorLink>
                <AnchorLink offset={10} animationduration={1000} href='#Subscribe' className={style.a}>Subscribe</AnchorLink>
                <AnchorLink offset={0} animationduration={2000} href='#Partner' className={style.a}>Partner</AnchorLink>
                <a onClick={this.props.redirected} className={style.a} href=''>Shop</a>
            </div>
        }
        else {
            hammenu = <></>
        }
        if (!this.props.searchToggel) {
            searchFeild = <div className={style.social}>
                <Badge
                    badgeContent={this.props.cartList.length}
                    color="error"
                    showZero
                >
                    <FaShoppingCart className={style.icon} />
                </Badge>
                <FaSearch onClick={this.props.searchButtonToggel} className={style.icon} />
            </div>
        }
        else {
            searchFeild = <Grow in={true} timeout={1000}><div className={style.social}>
                <Input
                    id='search'
                    placeholder='Search'
                    focused={true}
                    margin='dense'
                    type='text'
                    value={this.props.search}
                    onChange={(e) => this.props.searchIt(e.target.value)}
                />
                <IconButton aria-label='search' onClick={this.props.redirected}>
                 <FaSearch className={style.icon} />
                </IconButton>
                <IconButton aria-label='cancel' onClick={this.props.searchButtonToggel}>
                 <FaTimes className={style.icon} />
                </IconButton>
            </div></Grow>
        }
        if(this.props.redirect){
            redirection= <Redirect push to='./Shop'/>
        }
        return (            
            <div className={style.main}>
                {redirection}
                <div className={style.logo}>
                    <Badge
                        badgeContent={'Shop'}
                        overlap="circle"
                        color="error">
                        <img src='https://fontmeme.com/permalink/200825/66667bf663c900581f31ada9b01a013c.png' alt='EmporiumLogo' />
                    </Badge>
                </div>
                <div className={style.hamburger}>
                    <HamburgerMenu
                        isOpen={this.props.menuOpen}
                        menuClicked={this.props.menuClick}
                        width={30}
                        height={22}
                        strokeWidth={3}
                        rotate={0}
                        color='gray'
                        borderRadius={0}
                        animationduration={0.5}
                    />
                    {hammenu}
                    <Badge
                        className={style.cart}
                        badgeContent={this.props.cartList.length}
                        color="error"
                        showZero
                    >
                        <FaShoppingCart className={style.icon} />
                    </Badge>
                </div>

                <div className={style.menu}>
                    <AnchorLink offset={10} animationduration={1000} href='#Home' className={style.a}>Home</AnchorLink>
                    <AnchorLink offset={10} animationduration={1000} href='#Category' className={style.a}>Categories</AnchorLink>
                    <AnchorLink offset={10} animationduration={1000} href='#Products' className={style.a}>Products</AnchorLink>
                    <AnchorLink offset={10} animationduration={1000} href='#Subscribe' className={style.a}>Subscribe</AnchorLink>
                    <AnchorLink offset={0} animationduration={2000} href='#Partner' className={style.a}>Partner</AnchorLink>
                    <a onClick={this.props.redirected} className={style.a} href=''>Shop</a>
                </div>
                <Divider className={style.divider} orientation="vertical" flexItem />
                {searchFeild}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cartList,
        search: state.search,
        menuOpen: state.menuOpen,
        searchToggel: state.searchToggel,
        redirect: state.redirect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (item) => dispatch(addCart(item)),
        searchIt: (item) => dispatch(searchIt(item)),
        menuClick: () => dispatch(menuClick()),
        searchButtonToggel: () => dispatch(searchButtonToggel()),
        redirected: () => dispatch(redirected())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);