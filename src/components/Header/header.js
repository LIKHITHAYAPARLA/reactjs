import React from 'react';
import classes from './header.module.css';

const headpart=({name})=>{
    return(
        <li className={classes.part}>{name}</li>
    )
}
export default headpart;