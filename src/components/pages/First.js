import React from 'react';
import '../../styles/first.css';
import Request from 'superagent';
import {Product} from './Product';
import PubSub from 'pubsub-js';
import { SlideShow } from './SlideShow';



export class First extends React.Component
{
    constructor(){
        super();
        
        this.state={
        
       
            currentPage: 1,
            totalPages: 3,
            products:[]
        }
        
        this.readPage=this.readPage.bind(this);
        this.pageChange=this.pageChange.bind(this);

        
    }
   
    pageChange(type){
        let flag=true;
        if(type=="left")
        {
            if(this.state.currentPage==1)
               flag=false;
            else
               this.state.currentPage--;
        }
        if(type=="right")
        {
            if(this.state.currentPage==this.state.totalPages)
               flag=false;
            else
               this.state.currentPage++;
        }
       if(flag)
       this.readPage();
    }

    readPage(){
          Request.get("http://localhost:4500/Products?_page="+this.state.currentPage+"&_limit=5").
          then((response)=>{
              console.log(response.body)
              this.setState({products:response.body});
          },
               ()=>{}
          )
    }
    componentDidMount(){
           setInterval(this.slideshow,2000);
           this.readPage();
    }
    render(){
       
        
        return(
         
           <div id="first-container">
           <SlideShow></SlideShow>

            <div id="product-show">
                <h3>Our Products</h3>
                <div onClick={()=>this.pageChange("left")} id="left-arrow">
                    <img src="http://localhost:8078/beautyapp/left.png"/>
                </div>
                <div onClick={()=>this.pageChange("right")} id="right-arrow">
                    <img src="http://localhost:8078/beautyapp/right.png"/>
                </div>
                {this.state.products.map(x=><Product  id={x.id}
                url={x.image} name={x.name} price={x.price} key={x.id}></Product>)}
            </div>

            <div id="third-level">
                   <div id="left-ad">
                       <img src="http://localhost:8078/beautyapp/ad.jpg"/>
                   </div>
                   <div id="right-text">
                       <h5>Our Stores</h5>
                       <dl>
                        
                           <dt>Mumbai </dt>
                           <dd>Hill Road , Bandra West, 400050</dd>

                           <dt>New Delhi </dt>
                           <dd>Cannaugh Place, New Delhi, 110001</dd>

                           <dt>Chennai </dt>
                           <dd>South Usman Road, T Nagar, 600017</dd>

                           <dt>Bengalore </dt>
                           <dd>Sony Center, Koramangala, 560034</dd>
                       </dl>
                   </div>
            </div>
           </div>
           
        );
    }
}