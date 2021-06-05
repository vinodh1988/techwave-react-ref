import React from 'react';
import '../../styles/shop.css';
import { Product } from './Product';
import {SlideShow} from './SlideShow'
import Request from 'superagent'

export class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            types:["Hair","Skin","Makeup","Fragrance"],
            typelist:[[],[],[],[]]
        }
    }

    componentDidMount(){
        
        for(let x in this.state.types){
        
            Request.get("http://localhost:4500/Products?type="+this.state.types[x]).then(
                (response)=>{
                    console.log("Running")
                    let     temp=this.state.typelist;
                    temp[x]=response.body;
                    this.setState({typelist:temp});
                },
                ()=>{}
            )
        }

    }
    render(){
        let code=this.state.typelist.map((x,index)=>{
                return(
                    <div className="catalog">
                      <h3>{this.state.types[index]}</h3>
                      {x.map((y)=>{
                        return(
                        <div className="product-list">
                            <Product  url={y.image} id={y.id}
                            name={y.name} price={y.price} key={y.id}/>
                        </div>
                        )
                     })}
                    </div>

                )
             }
            )
        return(
            <div id="shop-container">

                <SlideShow></SlideShow>
                <h1>Shop our exclusive set of Products</h1>
                 
                {code}
            </div>
        );
    }
}