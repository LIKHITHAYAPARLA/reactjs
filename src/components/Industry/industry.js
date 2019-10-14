import React from 'react';
import classes from './industry.module.css';

const industry=({name})=>{
    return(
        <div>
    <div className={classes.indi}>{name}</div>
    </div>
    )
}
export default industry;