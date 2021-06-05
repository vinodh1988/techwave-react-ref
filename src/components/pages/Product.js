import React from 'react';
import '../../styles/product.css';
import { Link } from 'react-router-dom';

export const Product=({id,url,name,price})=>{
   const imgurl="http://localhost:8078/beautyapp/"+url;
    let link="/details/"+id;
    return(
    <Link to={link}>
    <div className="product">
        <h5>{name}</h5>
        <div className="image-box">
            <img src={imgurl} />
        </div>
        <h6>Price: &#8377;{price}</h6>
    </div>
    </Link>
    );
}