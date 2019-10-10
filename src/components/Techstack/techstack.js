import React from 'react';
import './techstack.css';

const tech=({pics})=>{
    return(
           <div className= "pict">
                <img src={pics} width="50px" height="40px" alt="none" />
            </div>
    )
}
export default tech;