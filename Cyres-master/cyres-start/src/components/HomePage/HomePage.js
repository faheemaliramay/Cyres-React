import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './HomePage.css';
import Bit from './../../components/Images/Bit';
import Ethereum from './../../components/Images/Ethereum';
import Ripple from './../../components/Images/Ripple';
import Lite from './../../components/Images/Lite';
import ReactTable from 'react-table';
import Table from './../../components/Table/Table';
import Search from 'react-search-box';
import Facebook from './../../components/ForgetPassword/ForgetPassword';
import Twitter from './../../components/Images/FooterImages/Twitter';
import Instagram from './../../components/Images/FooterImages/Instagram';
import SocialMediaBar from 'react-social-media-bar';
import StickyFooter from 'react-sticky-footer';






class HomePage extends Component{
  
    render() {
     
        return (
          
            
            <div>
            <div className={classes.Slider}>
        <h3> CYRES-Exchange The World </h3>
        <br />
    <a  className={classes.Link}  href="/">Create an Account</a> <p> | </p>
      <p> Already Registered ? </p>  
      <a  className={classes.Link} href="/">Login</a> 
     
      <div className="row">
       
    <a  href="/" > <Bit className="col-med-3"/> </a>
    
    <a href="/" > <Ethereum className="col-med-3" /> </a>
    
     <a href="/" ><Ripple className="col-med-3" /></a>
   
           <a href="/" > <Lite className="col-med-3" /> </a>
            
     </div>
     
               
                  
     
                  </div>
                  <div className={classes.Slider2}>
     <a className={classes.Link} href="/">Cyres Distributes IQ   (7-15)</a> 
      <a className={classes.Link} href="/">TRX Competition Has Now Conluded  (7-12)</a>  
       <a className={classes.Link} href="/">Cyres Distributes Second Scheduled Airdrop...   (7-11)</a>
                      </div>
         {/* <div >
             <div className= {classes.Div}>
    <a className={classes.Link1} href="/" >BNB/BTC <br /> Volume : </a> 
                </div> 
            </div>  */}
           <div>
             <div className={classes.Button}>
               <button bsStyle="primary">Favorites</button>
               </div>
               <div className={classes.Button}>
               <button bsStyle="primary">BNB MArket</button>
               </div>
               <div className={classes.Button}>
               <button  bsStyle="primary">BTC MArket</button>
               </div>
               <div className={classes.Button}>
               <button bsStyle="primary">ETH MArket</button>
               </div>
               <div className={classes.Button}>
               <button bsStyle="primary">USDT Market</button>
               </div>
               {/* <div className={classes.Search}>
                <Search
               
                class="search-class"
                searchKey="full_name"
              />
              </div> */}
             </div>
            <div>
                <Table />
           </div>
           <div>
               <footer>
      <div id="credits">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-5">
              <li>&copy; 2015</li>
              <li><a href="contactus">Contact Us</a></li>
              <li><a href="about">About</a></li>
            </div>
             <SocialMediaBar
  icons={	[ 'github', 'facebook-official']}
  bgColor="rgba(0, 0, 0, 0)"
  iconColor="#000"
  iconOpacity={1}
  iconSize="1em"
  hoverColor="#000"
  hoverOpacity={1}
  margin={{top: '5px', right: '5px', bottom: '5px', left: '5px'}}
  padding={{top: '0px', right: '0px', bottom: '0px', left: '0px'}}
  sameTab={false}
  vertical={false}
/> 
             <div className="col-md-5" id="social-networks">
              <button type="button" class="btn btn-fb"><i class="fa fa-facebook"></i></button>
              <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-instagram-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-youtube-square"></i>youtube</a>
              <a href="#"><i className="fa fa-2x fa-vimeo-square"></i>vimeo</a>
              <a href="#"><i className="fa fa-2x fa-pinterest-square"></i>pinterest</a>
              <a href="#"><i className="fa fa-2x fa-linkedin-square"></i>linkedin</a>
            </div> 
          </div>
        </div>
      </div>
    </footer> 
    
             </div>
                  </div>
                
        );
    }
}

export default HomePage;