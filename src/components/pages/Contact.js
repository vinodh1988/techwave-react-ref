import React from 'react';
import { SlideShow } from './SlideShow';
import '../../styles/contact.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Contact extends React.Component{
    static defaultProps = {
        center: {
          lat: 19.1031,
          lng: 72.9232
        },
        zoom: 11
      };

render(){
    return(
        <div id="contact-container">
                <SlideShow></SlideShow>
          <div id="second-row">
              <div id="address">
                  <h3>Our Corporate Office</h3>

                  <address>
                      KAIRA Beauty Products,<br/>
                      Godrej & Boyce Industry Estate, Vikhroli West, <br/>
                      Mumbai,<br/>
                      Maharashtra 400079<br/><br/>

                    Phone: 022 6796 0000
                  </address>

              </div>
              <div id="map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
             <AnyReactComponent
            lat={19.1031}
            lng={72.9232}
            text="Kaira Beauty Products"
          />
         </GoogleMapReact>

              </div>
          </div>

          <div id="writeus">
            <h3> Write Us</h3>
               <h4>Title </h4>
               <input type="text"/>
              <br/><br/>
              <h4>Description</h4>
               <textarea></textarea>
              <br/><br/><br/>
              <button className="btn" style={{backgroundColor:"pink",color: "white"}}>Send Message</button>
            
          </div>
        </div>

    )
}
}