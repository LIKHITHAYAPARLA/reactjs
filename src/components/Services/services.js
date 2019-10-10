import React from 'react';
import './services.css'; 

const services=({img,contents,name})=>{
    return( 
        <div className="mainpart">
            <div className="fisrtpart">
            <div className="un">
                <div className="imagepart">
                    <img src={img} className="hel" alt="none"/>
                </div>
                <div className="content" > 
                <div className="a"><span className="ali">{contents}</span></div>
                    <p>{name}.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default services;