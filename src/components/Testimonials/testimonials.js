import React from 'react';
import classes from './testimonials.module.css'; 
import crm from '../../assets/crm.png';
import testimonial from '../../assets/testi.png';

const testi=()=>{
    return( 
        <div className={classes.container}>
           <div className={classes.servicecontainer}>
             <div className={classes.serviceheading}>
               <div><span className={classes.serviceunderline}>Testimonials</span></div>
               <div className={classes.servicecontent}>
                 <div className={classes.card}>
                   <img src={crm} class0Name={classes.cardimage} alt="avatar"/>
                   <div className={classes.cont}>
                   <h4><b>Name</b></h4>
                   <p className={classes.text}>Panna has allowed us to filter candidates.</p>
                 </div>
               </div>
             </div>
             </div>
             <img src={testimonial} className={classes.serviceimage} alt="logo"/>
           </div>
         </div>
    )
}
export default testi;