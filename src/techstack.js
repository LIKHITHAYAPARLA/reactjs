import React from 'react';
import './App.css';
const tech=(props)=>{
    return(
           <div className= "pict">
                <img src={props.pics} width="50px" height="40px" />
            </div>
    )
}
export default tech;