import React from 'react';
import '../../styles/cart.css';
import {makeOrder} from '../Helpers'

export class Cart extends React.Component{
    constructor(){
            super();
            this.placeOrder=this.placeOrder.bind(this);
    }

    placeOrder(){
       let orderid= makeOrder();
       if(orderid==="-1")
          alert("You need to sign to make an order");
       else
          this.props.history.push("/orders/"+orderid);
    }
    render(){
        let cart=localStorage.getItem("cart");
        let code="";
        let total=0;
        if(cart){
          cart=  JSON.parse(cart);
          code=cart.map(x=>{
              total+=(x.price*x.qty)
              return(<tr>
              <td>{x.name}</td>
              <td>{x.qty}</td>
              <td>&#8377;{x.price}</td>
              <td>&#8377;{x.price * x.qty}</td>
              
          </tr>)
          })
        }
        else
          code=(<h3>Cart is Empty</h3>)
        return(
            <div id="cart-content">
                <h3>Products You have Purchased</h3>
                <div id="pro-table">
                   <table>
                       <thead>
                       <tr>
                           <th style={{width: "400px"}}>Name</th>
                           <th style={{width: "100px"}}>Quantity</th>
                           <th style={{width: "100px"}}>Price</th>
                           <th style={{width: "150px"}}>Amount</th>
                       </tr>
                       </thead>
                       <tbody>
                           {code}
                       </tbody>
                   </table>
                </div>

               <div id="amounter"> Total bill amount to be paid:  &#8377;{total} </div>
               <div id="pay-button"><button className="btn" onClick={this.placeOrder}>
               Place the order</button></div>
            </div>
        );


    }
}