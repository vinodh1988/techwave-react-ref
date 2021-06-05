import React from 'react';
import { SlideShow } from './SlideShow';
import "../../styles/aboutus.css"

export class Aboutus extends React.Component{

render(){
    return(
        <div id="aboutus-container">
                <SlideShow></SlideShow>
                <div id="about-div">
        <div id="abt-content">
            <h3>About us</h3>
                    <p>Kiara Beauty Products  has a very wide range of products, 
                        which include "pharmaceuticals, personal care, baby care, 
                        well-being, nutrition and animal health products."
                         The Neem Face Wash is one of their most popular and 
                         well known products. Mothercare products have been 
                         launched in 2016 with foray into extensive research and 
                         development in systems of ancient Ayurveda medicines of India.
                          The company has a presence in 106 countries
                      </p>
                      <p>
                      Cosmetics are products used to enhance or change the appearance of the face, fragrance or the texture of the body. Many cosmetics are designed for use of applying to the face and body. They are generally mixtures of chemical compounds derived from natural sources (such as coconut oil), or may be synthetic or artificial.[1] Cosmetics that are applied to the face to enhance one's appearance are also known as makeup which include items such as; lipstick, mascara, eye shadow, foundation, blush, highlighter, bronzer and several other products.
                      </p>
                      <p>
                      Cosmetics are intended to be applied externally. They include, but are not limited to, products that can be applied to the face: skin-care creams, lipsticks, eye and facial makeup, towelettes, and colored contact lenses; to the body: deodorants, lotions, powders, perfumes, baby products, bath oils, bubble baths, bath salts, and body butters; to the hands/nails: fingernail and toe nail polish, and hand sanitizer; to the hair: permanent chemicals, hair colors, hair sprays, and gels.

A subset of cosmetics is called "makeup", refers primarily to products containing color pigments that are intended to alter the user's appearance. Manufacturers may distinguish between "decorative" and "care" cosmetics.

Cosmetics that are meant to be used on the face and eye area are usually applied with a brush, a makeup sponge, or the fingertips.

Most cosmetics are distinguished by the area of the body intended for application.
                      </p>
                    </div>
                    <div id="vertical-banner">
                        <img src="http://localhost:8078/beautyapp/vertical.jpg"/>
                    </div>
                </div>
        </div>

    )
}
}