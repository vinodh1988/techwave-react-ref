import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/login.css';
import {Link} from 'react-router-dom';
import Request from 'superagent';
import PubSub from 'pubsub-js';


export class Login extends React.Component{
    constructor()
    {
        super();
        this.login=this.login.bind(this);
        this.state={
            message: ""
        }
    }

    login(){
        let email=ReactDOM.findDOMNode(this.refs.email).value;
        let password=ReactDOM.findDOMNode(this.refs.password).value;
        if(email.length==0 || password.length==0){
            this.setState({message:"* Enter all the fields"});
            return;
        }
       
         Request.get("http://localhost:4500/users?email="+email).then(
             (response)=>{
                 
                 if(response.body.length==0)
                   this.setState({message:"* User doesn't exist"})
                else if(response.body[0].password==password){
                    let value= response.body[0].firstname+" "+response.body[0].lastname;
                    localStorage.setItem("user",value)
                    localStorage.setItem("email",response.body[0].email)
                     PubSub.publish("log-event",value+", Sign out");
                     this.props.history.push("/")
                }
                  else{
                    this.setState({message:"* Password incorrect"})
                  }
                
             },
             ()=>{}
         );
    }

    render(){
      if(!localStorage.getItem("user")){
        return(
        <div id="login">
           <div id="messages" style={{padding: "20px", textAlign:"center" ,color:"red"}}> 
                  {this.state.message}
           </div>
        <form>
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" ref="email" className="form-control" placeholder="Enter email" id="email"/>
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" ref="password" className="form-control" placeholder="Enter password" id="pwd"/>
            </div>
           
            <button type="button" onClick={this.login} className="btn">Submit</button>
          </form>
           <div id="register"><Link to="/register">Not Register yet? </Link></div>
          </div>
            
        );
        }
        else{
           localStorage.removeItem("user");
           localStorage.removeItem("email");
           PubSub.publish("log-event","Sign in");
           return(
           <h1 style={{
             color: "pink",
             textAlign:"center",
             paddingTop: "20%",
             fontFamily:"Arial"
           }}>Your have logged out</h1>
           );
        }
    }
}