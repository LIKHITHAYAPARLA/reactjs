import React from 'react';
import './icons.css';

const iconsview=({pic,name})=>{
    return(
        <div className="icons">
              <img src={pic} alt="none"/>
              <span className="tb">{name}</span>
        </div>
      
    )
}
export default iconsview;