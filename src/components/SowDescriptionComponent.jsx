import React, {Component} from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'




export default class ShowDescriptionComponent extends Component{
    static propTypess ={
        name: propTypes.string.isRequired,
        language: propTypes.string.isRequired,
        premiered: propTypes.string.isRequired,
        image:propTypes.shape({
            medium: propTypes.string.isRequired,
            original: propTypes.string.isRequired,
        }).isRequired,
        id: propTypes.number.isRequired,      
    };
    render(){
      
        return(
            <div>
                <Link to = {`/ShowDescription/${this.props.id}`}>
                <h1>Name:{this.props.name}</h1>
                <img src={this.props.image.medium}></img>
                </Link>
                <p>{this.props.language}</p>
                <p>{this.props.premiered}</p>
            </div>
        
        )
    }
} 

 