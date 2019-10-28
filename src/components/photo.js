import React from 'react';
import {Link} from "react-router-dom";
import {kake} from '../main.js';
console.log('photo is running for react', kake);

class Photo extends React.Component {
    constructor(){
        super()
        this.state = {
            images: [],
            rightButton: document.getElementById('#right-arrow'),
            leftButton: document.getElementById('#left-arrow')
        }
    }

    componentDidMount(){
        this.showPhoto()
    }
    showPhoto(){

    }
    render(){
        return (
            <g id="clipper">
            <clipPath id="photo-img-clip">
                    
                    <rect x="200" y="390" width="260" height="230" fill="aqua"></rect>
                    
            </clipPath>
            
            <foreignObject x="200" y="390" width="260" height="230">
                <img src="/images/vintage-camera.jpg" className="photo-img" alt="Ecommerce used camera item" />
            </foreignObject>

            </g>
            
        )
    }
}

export default Photo;