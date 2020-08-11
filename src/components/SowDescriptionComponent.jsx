import React, {Component} from 'react'
import propTypes from 'prop-types'




export default class ShowDescriptionComponent extends Component{
    // static propTypess ={
    //     name: propTypes.string.isRequired,
    //     language: propTypes.string.isRequired,
    //     premiered: propTypes.string.isRequired,
    //     image:propTypes.shape({
    //         medium: propTypes.string.isRequired,
    //         original: propTypes.string.isRequired,
    //     }).isRequired
        
    // };
    render(){
      
        return(
            <div>
                <h1>Name:{this.props.name}</h1>
                <img src={this.props.image.medium}></img>
                <p>{this.props.language}</p>
            </div>
        
        )
    }
} 

 