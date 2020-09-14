import React, { PureComponent } from 'react';
import style from '../Scss/paper.module.css'
import { FaFlag } from 'react-icons/fa'
import { Paper, Grow, } from '@material-ui/core'
class Carousel1 extends PureComponent {
    render() {
        return (
            <>
                <Paper className={style.paper} elevation={3}>
                    <div className={style.Background} style={{ backgroundImage: `url('./Home2.jpg')` }}>
                    </div>
                    <div className={style.info}>
                        <Grow in={true} timeout={3000}>
                            <div className={style.info2}>
                            <FaFlag className={style.flag}/>
                            <p className={style.p3}>Want to update your style?</p>
                            <p className={style.p4}>NEW COLLECTION</p>
                            <p className={style.p5} >FRESH, STYLISH & TRENDY</p>
                            </div>
                        </Grow>
                    </div>
                </Paper>
            </>
        );
    }
}

export default Carousel1;