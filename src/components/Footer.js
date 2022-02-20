import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div class="wrapper dashboard Grofoo-home">
        <div id="main" class="main search_result">
        <div  className="footer">
            <div  className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-9 col-xs-12">
                        <ul style={{ display: "inline" }} className="footer-link">
                          
                            <li> <Link to='/aboutus' >About Us</Link> </li>
                            <li><Link to='/Business_contact_us' >Contact Us</Link></li>
                            <li><Link to='/policy' >Privacy Policy</Link></li>
                            <li><Link to='/blog' >Blog</Link></li>
                            <li><Link to='/Business_Home' >Retailer login</Link></li>
                         
                          
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-xs-12 text-right">
                        <ul className="social-link">
                            <li><i className="ion-social-facebook social-icon"></i></li>
                            <li><i className="ion-social-linkedin social-icon"></i></li>
                            <li><i className="ion-social-twitter social-icon"></i></li>
                            <li><i className="ion-social-skype social-icon"></i></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer