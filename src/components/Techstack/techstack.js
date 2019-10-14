import React from 'react';
import classes from './techstack.module.css';

const tech=({pics})=>{
    return(
           <div className= {classes.pict}>
                <img src={pics} width="50px" height="40px" alt="none" />
            </div>
    )
}
export default tech;