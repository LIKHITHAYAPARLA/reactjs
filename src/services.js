    import React from 'react';
import './App.css'; 
const services=(props)=>{
    return( 
        <div className="mainpart">
            <div className="fisrtpart">
            <div className="un">
                <div className="imagepart">
                    <img src={props.img} className="hel"/>
                </div>
                <div className="content" > 
                <div className="a"><span className="ali">{props.contents}</span></div>
                    <p>{props.name}.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default services;