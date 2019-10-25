import React from 'react';
console.log('Photo is running for react');

class Photo extends React.Component {
    constructor(){
        super()
        this.photo = 'hey'
    }
    showPhoto(){
       
    }
    render(){
        return (
            <p>THIS IS JSX FROM WEBPACK</p>
        )
    }
}

export default Photo;