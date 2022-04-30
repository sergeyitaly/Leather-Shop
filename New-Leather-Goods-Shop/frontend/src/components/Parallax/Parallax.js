import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParallaxCache from "./ParallaxCache";


const ParallaxImage = (props) => {

    return (
    <Parallax>
        <ParallaxBanner 
            className="parallaxEffect"
            layers={[{image: props.imgsrc, amount: 0.6}]}
            style={{height: props.height,}}
        >
            <div>
                {props.children}
            </div>
        </ParallaxBanner>
        <ParallaxCache/>
    </Parallax>
    )
}

export default ParallaxImage;