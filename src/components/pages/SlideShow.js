import React from 'react';

export class SlideShow extends React.Component{
       constructor(){
        super();
        this.state={
            images:["slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg",
            "slide5.jpg","slide6.jpg"],
            current:"slide1.jpg",
          
        }
        this.slideshow=this.slideshow.bind(this);
      
       }
       slideshow(){
        this.setState({current:this.state.images[Math.round(Math.random()*5)]});
       }
       componentDidMount(){
            
             this.slideshow();
             setInterval(this.slideshow,2000)
       }

       render(){
           let url="http://localhost:8078/beautyapp/"+this.state.current;
           return(
            <div id="slideshow">
               <img src={url} alt="slide show image" 
                     style={{height: "90%",width:"80%"}}/>
            </div>
           );
       }
}