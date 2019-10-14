import React from 'react';
import classes from './services.module.css'; 

const services=({img,contents,name})=>{
    return( 
        <div className={classes.mainpart}>
            <div className={classes.fisrtpart}>
            <div className={classes.un}>
                <div className={classes.imagepart}>
                    <img src={img} className={classes.hel} alt="none"/>
                </div>
                <div className={classes.content} > 
                <div className={classes.a}><span className={classes.ali}>{contents}</span></div>
                    <p>{name}.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default services;