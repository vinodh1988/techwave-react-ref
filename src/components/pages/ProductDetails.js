import React, { useLayoutEffect } from 'react';
import Request from 'superagent';
import '../../styles/details.css';
import {cartchecker,addToCart} from '../Helpers';
import ReactDOM from 'react-dom';

export class  ProductDetails extends React.Component{
    constructor(){
             super();
             this.state={product:{}
             }
        
            this.addToCartEvent=this.addToCartEvent.bind(this);
    }
    
    addToCartEvent(){
       let qty=  ReactDOM.findDOMNode(this.refs.qty).value

      addToCart({
          id:this.state.product.id,
          name:this.state.product.name,
          price: this.state.product.price,
          qty: qty
      })

      this.setState({product:this.state.product})

    }
    componentDidMount(){
           Request.get("http://localhost:4500/Products/"+this.props.match.params.productid)
           .then(
               (response)=>this.setState({product:response.body}),
               ()=>{}
           )
    }
    
    render(){
        console.log(this.props.match.params.productid)
        let buttonstatus=cartchecker(this.props.match.params.productid)?"Already Added":
        "Add to cart";
        return(
        <div id="Productdetails-container">
            <div id="image-block">
                <img src={"http://localhost:8078/beautyapp/"+this.state.product.image}/>
            </div>
            <div id="description-block">
               <h3>{this.state.product.name}</h3>
               <h6>({this.state.product.qty})</h6>
               <p>
                   {this.state.product.description}
               </p>
               <h2>
                    Price: &#8377;{this.state.product.price}
               </h2>
                 Quantity <input type="number" defaultValue="1" ref="qty" min="1" max="5"/><br/>
                <button 
                type="button"
                class="btn" 
                onClick={this.addToCartEvent}
                disabled={buttonstatus=="Already Added"?true:false}>
                    {buttonstatus}
                    </button>
            </div>
        </div>
        );

    }
}