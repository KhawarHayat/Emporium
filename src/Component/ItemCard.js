import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core'
import { FaShoppingCart } from 'react-icons/fa'
import '../Scss/card.scss'
class ItemCard extends Component {
    render() {
        return (
            <Card className='cardmain' id={this.props.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image={this.props.src}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <p className='name'>{this.props.name}</p>
                <p className='category'>{this.props.category}</p>
                <div className='carddivider'>
                <hr/>
                <FaShoppingCart className='cardicon' onClick={this.props.onClick}/>
                </div>
                <p className='cardprice'>{this.props.price}</p>
            </Card>
        );
    }
}

export default ItemCard;