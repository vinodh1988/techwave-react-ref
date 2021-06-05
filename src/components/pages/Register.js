import React, { useLayoutEffect, useEffect } from 'react';
import '../../styles/register.css';
import ReactDOM from 'react-dom';
import Request from 'superagent'

export class Register extends React.Component{
    constructor(){
        super();
        this.registerUser=this.registerUser.bind(this);
    }

    registerUser(event){
             event.preventDefault();
             let firstname=ReactDOM.findDOMNode(this.refs.firstname).value
             let lastname=ReactDOM.findDOMNode(this.refs.lastname).value
             let email=ReactDOM.findDOMNode(this.refs.email).value
             let password=ReactDOM.findDOMNode(this.refs.password).value
             Request.post("http://localhost:4500/users")
             .set("Accept","application/json")
             .send({
                 id:email,
                 firstname: firstname,
                 lastname:lastname,
                 email: email,
                 password: password
             })
             .then(
                 ()=>{
                     alert("Registered")
                     this.props.history.push("/")
                 },
                 ()=>{
                     alert("Not registered , email already exists")
                 }
             );

    }

    render(){
        return(
                <div id="register">
                <form onSubmit={this.registerUser}>
                    <h3 style={{padding: "20px", color: "pink", fontFamily:"Arial"}}
                    >User registration</h3>
                    <div id="reg-container">
                    <div id="register-left">
                       <div className="form-group">
                        <label for="firstname">First Name:</label>
                         <input type="text" ref="firstname" 
                         className="form-control" placeholder="Enter firstname" 
                         minLength="3" required/>
                        </div>
                        <div className="form-group">
                        <label for="lastname">Last Name:</label>
                         <input type="text" ref="lastname" 
                         className="form-control" placeholder="Enter lastname"
                         minLength="3" required />
                        </div>
                    </div>
                    <div id="register-right">
                    <div className="form-group">
                        <label for="email">Email:</label>
                         <input type="email" ref="email" 
                         className="form-control" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                        <label for="password">Password:</label>
                         <input type="password" ref="password" 
                         className="form-control" placeholder="Enter password" minLength="3"
                         required/>
                        </div>
                    </div>
                    </div>
                    <div id="reg-button">
                    <button class="btn">Register</button>
                    </div>
                    </form>
                </div>
        );
    }
}