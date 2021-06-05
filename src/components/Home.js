import React from 'react';
import '../styles/home.css';
import image from '../assets/logo.png';
import {Order} from './pages/Order'
import  {First} from './pages/First'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {Aboutus} from './pages/Aboutus';
import {Contact} from './pages/Contact';
import {Shop} from './pages/Shop';
import {Cart} from './pages/Cart';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import PubSub from 'pubsub-js';
import { ProductDetails } from './pages/ProductDetails';


export class Home extends React.Component{
    constructor(){
        super();
        this.state={
            loginstatus: localStorage.getItem("user")?localStorage.getItem("user"):"Sign in"
           , cartCount: 0
        }

       
    }

    componentDidMount(){
        PubSub.subscribe("log-event",(event,data)=>{
            this.setState({loginstatus:data})
        })

        let cart=localStorage.getItem("cart");
        cart=JSON.parse(cart);
        if(cart)
        this.setState({cartCount:cart.length});

        PubSub.subscribe("cart-event",(event,data)=>{
            this.setState({cartCount:data});
        });
    }
    render(){
              return(
        <Router>
         <div id="home">
            <div id="container">
            <div id="left">
                  <img src="http://localhost:8078/beautyapp/large.png"
                  style={{height:"80px", width: "140px"}}/>
            </div>
            <div  id="right">
                <nav className="navbar navbar-expand-sm bg-pink navbar-dark">
                
                <a className="navbar-brand" href="#">
                     KAIRA
                </a>
                
               
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">Shop</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        
                      
                        <input type="text" placeholder="Search a product"/>
                      <img src="http://localhost:8078/beautyapp/search.png"
                      style={{height: "40px", width:"40px" ,margin:"10px", border:"2px solid pink"}}
                      />
                            
                      
                      </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        
                      
                        <Link className="nav-link" to="/login">
                        <img src="http://localhost:8078/beautyapp/user.png" 
                        style={{height: "40px", width:"40px"}}
                      />
                            {this.state.loginstatus} </Link>
                      
                      </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                      
                        <li className="nav-item">
                     <Link to="/cart"> 
                        <img src="http://localhost:8078/beautyapp/cart.png" 
                          style={{height: "40px", width:"40px"}}
                        />
                        <span className="badge badge-warning">{this.state.cartCount}</span>
                      </Link>
                        </li>

                        
                </ul>
             
              </nav>
             
              </div>
            </div>
        <div id="component">
          <Route exact path="/" component={First} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/details/:productid" component={ProductDetails}/>
          <Route path="/orders/:orderid" component={Order}/>
        </div>
            </div>

        <div id="footer">
             &copy; All copyrights reserved. 2020  <a href="#">Sitemap</a>
        </div>
        </Router>
             );
    }
}