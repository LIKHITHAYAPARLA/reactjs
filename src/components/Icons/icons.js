import React from 'react';
import classes from './icons.module.css';

const iconsview=({pic,name})=>{
    return(
        <div className={classes.icons}>
              <img src={pic} alt=""/>
              <span className={classes.tb}>{name}</span>
        </div>
      
    )
}
export default iconsview;