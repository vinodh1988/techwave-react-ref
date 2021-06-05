import React from 'react';


export const Order=({match})=>{
    return(
        <h5 style={{margin:"10%",color:"pink",fontFamily:"Arial",textAlign:"center"}}>
            Your order is placed and the order id is {match.params.orderid}
        </h5>
    )
}