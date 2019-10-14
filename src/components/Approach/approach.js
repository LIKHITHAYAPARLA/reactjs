import React from 'react';
import classes from './approach.module.css'; 

const aph=({imgs,appro,names})=>{
    return( 
        <div className={classes.mainpart}>
            <div className={classes.fisrtpart}>
            <div className={classes.uni}>
                <div className={classes.imagepart}>
                    <img src={imgs} className={classes.hel} alt="none"/>
                </div>
                <div className={classes.content}> 
                <div className={classes.a}><span className={classes.ali}>{appro}</span></div>
                    <p>{names}.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default aph;