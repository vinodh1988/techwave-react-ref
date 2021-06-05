import  PubSub from 'pubsub-js';

export const cartchecker=(id)=>{
     let cart=localStorage.getItem("cart");
     if(cart){
         cart=JSON.parse(cart);
         for(let x in cart){
             console.log(id,cart[x].id);
             if(Number(cart[x].id)===Number(id)){
              return true;
         }
     }
     }
     return false;
}

export const addToCart=(obj)=>{
    let cart=localStorage.getItem("cart");
    if(!cart){
         cart=[]
    }
    else
        cart=JSON.parse(cart);
        cart.push(obj);
        localStorage.setItem("cart",JSON.stringify(cart));
        PubSub.publish("cart-event",cart.length);
}

export const makeOrder=()=>{
  let user=localStorage.getItem("user");
  if(!user){
     return "-1";
  }

  let orderId=new Date().getTime()+user.substr(user.length-4,user.length-1);
  localStorage.removeItem("cart");
  PubSub.publish("cart-event",0);
  return orderId;
}