import React, { PureComponent } from 'react';
import style from '../Scss/paper.module.css'
import { Paper, Grow, } from '@material-ui/core'
class Carousel0 extends PureComponent {
    render() {
        return (
            <>
                <Paper className={style.paper} elevation={3}>
                    <div className={style.Background} style={{ backgroundImage: `url('./Home1.jpg')` }}>
                    </div>
                    <div className={style.info}>
                        <Grow in={true} timeout={3000}>
                            <div className={style.info1}>
                                <p className={style.p1}>Up to 70% off</p>
                                <p className={style.p2}>Discounts on fall collection</p>
                                <p className={style.sale}>Sale</p>
                            </div>
                        </Grow>
                    </div>
                </Paper>
            </>
        );
    }
}

export default Carousel0;