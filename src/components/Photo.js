import React from 'react';
import PhotoSvg from "./PhotoSvg.js";

class Photo extends React.Component {
    
    constructor(props){
        super(props)
        this.positionPhotoContainer = this.positionPhotoContainer

        this.state = {
            clipPath: document.getElementById('photo-img-clip')
        }
    }

    componentDidMount(){
        // this.positionPhotoContainer()
    }

    resizeClipRect(){ 
        let containerSize = document.querySelector('.image-border').getBoundingClientRect();
        let SVGrect = document.querySelector('#photo-img-clip rect');
        // rect.setAttribute('width', w)
        console.log(containerSize)
    }

    positionPhotoContainer(){
        let photoMainTop = document.getElementById('section-six-photo').getBoundingClientRect().top
        let photoBody = document.getElementsByClassName('image-border')[0]
  
        let left = photoBody.getBoundingClientRect().left
        let top = photoBody.getBoundingClientRect().top
        document.querySelector('.img-container').style.left = left + "px"
        document.querySelector('.img-container').style.top = top - photoMainTop + "px"

        if(window.innerWidth <= 1050) this.resizeClipRect()
    }

    render(){
        let images = ["vintage-camera.jpg","9th-st-bridge.jpg", "joshua-tree-night.jpg."];
        let altAttr = ["Ecommerce used camera item", "Los Angeles 9th street bridge.", "Long exposure Joshua Tree vintage camper."];
        return (

                <PhotoSvg />

            // <StartPhoto src={images} alt={altAttr}/>
        );
    }
}

class StartPhoto extends React.Component {
    render(){
        return (
            <div>
               {
                this.props.src.map( (src, i) => {
                       if(i === 0){
                        //  return <img key={i} src={`/images/${src}`} alt={this.props.alt[0]} />
                       }
                    })
                }
            </div>
        )
    }
}

    

export { Photo };