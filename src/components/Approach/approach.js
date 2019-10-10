import React from 'react';
import './approach.css'; 

const aph=({imgs,appro,names})=>{
    return( 
        <div className="mainpart">
            <div className="fisrtpart">
            <div className="uni">
                <div className="imagepart">
                    <img src={imgs} className="hel" alt="none"/>
                </div>
                <div className="content" > 
                <div className="a"><span className="ali">{appro}</span></div>
                    <p>{names}.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default aph;