import React from 'react';
import './App.css';
const iconsview=(props)=>{
    return(
        <div className="icons">
              <img src={props.pic}/>
              <span className="tb">{props.name}</span>
        </div>
      
    )
}
export default iconsview;