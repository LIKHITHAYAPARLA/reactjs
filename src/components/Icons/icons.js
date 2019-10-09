import React from 'react';
import './icons.css';
const iconsview=(props)=>{
    return(
        <div className="icons">
              <img src={props.pic}/>
              <span className="tb">{props.name}</span>
        </div>
      
    )
}
export default iconsview;