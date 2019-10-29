import React from 'react';
import {Link} from "react-router-dom";
import {kake} from '../main.js';
console.log('photo is running for react');

class Photo extends React.Component {
    constructor(){
        super()
        this.state = {
            images: [],
            rightButton: document.getElementById('right-arrow'),
            leftButton: document.getElementById('left-arrow'),
            clipPath: document.getElementById('photo-body')
        }
    }

    componentDidMount(){
        this.showPhoto()
    }
    showPhoto(){
       console.log( this.state.clipPath.getBBox())
    }
    render(){
        return (
           
            <g clipPath="url(#photo-img-clip)" id="clipper">
        
            <clipPath id="photo-img-clip">
                    
                    <rect x="200" y="390" width="260" height="230" fill="aqua"></rect>
                    
            </clipPath>
            <rect x="200" y="390" width="660" height="230"></rect>
            </g>
           
        )
    }
}

export default Photo;