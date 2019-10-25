import React from 'react';
console.log('photo is running for React');

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