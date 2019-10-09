import React from 'react';
import './testimonials.css'; 
import crm from '../../assets/crm.png';
import testimonial from '../../assets/testi.png';
const testi=(props)=>{
    return( 
        <div className="container">
           <div className="servicecontainer">
             <div className="serviceheading">
               <div><span className="serviceunderline">Testimonials</span></div>
               <div className="servicecontent">
                 <div className="card">
                   <img src={crm} class0Name="cardimage" alt="avatar"/>
                   <div className="cont">
                   <h4><b>Name</b></h4>
                   <p className="text">Panna has allowed us to filter candidates.</p>
                 </div>
               </div>
             </div>
             </div>
             <img src={testimonial} className="serviceimage" alt="logo"/>
           </div>
         </div>
    )
}
export default testi;