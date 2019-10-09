import React from 'react';
import './approach.css'; 
const aph=(props)=>{
    return( 
        <div className="mainpart">
            <div className="fisrtpart">
            <div className="uni">
                <div className="imagepart">
                    <img src={props.imgs} className="hel"/>
                </div>
                <div className="content" > 
                <div className="a"><span className="ali">{props.appro}</span></div>
                    <p>{props.names}.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default aph;