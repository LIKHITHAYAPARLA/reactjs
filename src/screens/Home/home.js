/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import classes from './home.module.css';
import Aph from '../../components/Approach/approach';
import Headpart from '../../components/Header/header';
import Services from '../../components/Services/services';
import Iconsview from '../../components/Icons/icons';
import Tech from '../../components/Techstack/techstack';
import Industry from '../../components/Industry/industry';
import Testi from '../../components/Testimonials/testimonials';
import mroads from '../../assets/mroads.png';
import ai from '../../assets/ai.png';
import web from '../../assets/web.png';
import bi from '../../assets/bi.png';
import app from '../../assets/app.png';
import network from '../../assets/network.png';
import crm from '../../assets/crm.png';
import dev from '../../assets/dev.png';
import devops from '../../assets/devops.png';
import ab from '../../assets/amazon.png';
import c from '../../assets/angular.png';
import d from '../../assets/aws.png';
import e from '../../assets/c.png';
import f from '../../assets/c++.png';
import g from '../../assets/cloud.png';
import h from '../../assets/CSS3.png';
import i from '../../assets/firebase.png';
import j from '../../assets/HTML5.png';
import k from '../../assets/ibm.png';
import l from '../../assets/java.png';
import m from '../../assets/jenkins.png';
import n from '../../assets/jquery.png';
import o from '../../assets/kurento.png';
import p from '../../assets/Liferay.png';
import q from '../../assets/MySQL.png';
import r from '../../assets/neo4j.png';
import s from '../../assets/NET.png';
import t from '../../assets/nodejs.png';
import u from '../../assets/python.png';
import v from '../../assets/react.png';
import w from '../../assets/Solr.png';
import x from '../../assets/spring.png';
import image from '../../assets/servicespic.png';
import approach from '../../assets/approach.png';
import industries from '../../assets/industries.png';

class App extends Component {
  state={
    names:[
      {name:'About Us'},
      {name:'Services'},
      {name:'Product'},
      {name:'Blogs'},
      {name:'Clients'},
      {name:'Careers'},
      {name:'Contact Us'},
    ],
    pics:[
      {pic:ai,name:'AI'},
      {pic:web,name:'Web'},
      {pic:bi,name:'BI'},
      {pic:app,name:'Application'},
      {pic:network,name:'Network'},
      {pic:crm,name:'CRM'},
      {pic:dev,name:'devops'},
    ],
    contents:[
      {con:'Ours Services',val:'We are in a unique position with experience in technology and business. Having delivered solutions and services across different domains, we use an innovative service model which is based on result driven partnerships.',url:image},
      ],
    appro:[
      {conte:'Our Approach',vals:'A project management methodology characterized by building products that customers really want, using short cycles of work that allow for rapid production and constant revision if necessary.',urls:approach},
    ],
    stack:[
      {pict:devops},
      {pict:c},
      {pict:q},
      {pict:l},
      {pict:g},
      {pict:i},
      {pict:x},
      {pict:j},
      {pict:ab},
      {pict:h},
      {pict:t},
      {pict:w},
      {pict:u},
      {pict:r},
      {pict:d},
      {pict:p},
      {pict:v},
      {pict:m},
      {pict:o},
      {pict:n},
      {pict:k},
      {pict:s},
      {pict:e},
      {pict:f},
    ],
    industryparts:[
      {name:'Hospitality'},
      {name:'Airlines'},
      {name:'Automotive Banking'},
      {name:'Health Care'},
      {name:'Finance'},
      {name:'Manufacturing'},
      {name:'Tele-Communications'},
      {name:'Real Estate'},
      {name:'Retail'},
    ]
  }

  render() {
    const { industryparts = null } = this.state;
    const {names=null}=this.state;
    const {stack=null}=this.state;
    const {appro=null}=this.state;
    const {pics=null}=this.state;
    const {contents=null}=this.state;
    return (
      <div className={classes.App}>
        <header className={classes.head}>
          <div className={classes.logo}>
                  <img src={mroads} width="144px" height="40px" alt="none"/>
          </div>
          <nav>
            <ul className={classes.menuinfo}>
              {
                Array.isArray(names)?names.map((item)=>{
                  return(<Headpart name={item.name}/>)
                }):null
              }
              </ul>
          </nav>
        </header>
      <div className={classes.ser}>{
       Array.isArray(contents)?contents.map((co)=>{
          return(<Services contents={co.con} name={co.val} img={co.url}/>)
        }):null
      }
        </div>
       <div className={classes.icon}>{
        Array.isArray(pics)?pics.map((ic)=>{
          return(<Iconsview pic={ic.pic} />)
         }):null
        }
        </div>
         <div className={classes.icon}>{
        Array.isArray(pics)?pics.map((ic)=>{
          return(<Iconsview name={ic.name} />)
         }):null
        } 
        </div>
        <div className={classes.apr}>{
        Array.isArray(appro)?appro.map((ci)=>{
          return(<Aph appro={ci.conte} names={ci.vals} imgs={ci.urls}/>)
        }):null
      }
        </div>
          <div className={classes.ol}>
            <div className={classes.test}>
             <span className={classes.ts}>Tech Stack</span>
             </div>
         <div className={classes.te}>{
            Array.isArray(stack)?stack.map((ts)=>{
           return(<Tech pics={ts.pict}/>)
          }):null
         }
         </div>
         </div> 
          <div className={classes.industryblock}>
           <div className={classes.industryheading}>
             <span className={classes.heading}>Industries</span>
           </div>
           <div className={classes.si}>
           <div className={classes.indus}>
           <div className={classes.industrypicture}>
             <img src={industries} className={classes.yh} alt="none"/>
           </div>
           </div>
           <div className={classes.indo}>
           <span className={classes.he}>Horizontal Market</span>
             <div className={classes.horizontal}>
      
             <div className={classes.industrycomponents}>{
               Array.isArray(industryparts) ? industryparts.map((ind)=>{
                 return(<Industry name={ind.name}/>)
               }) : null
             }
              </div>
             </div>
           </div>
         </div>
         </div>
         <div>
           <Testi/>
         </div> 
 </div>
    );
  }
}
export default App;
