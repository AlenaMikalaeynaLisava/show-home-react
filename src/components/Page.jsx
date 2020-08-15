import React, {Component} from 'react'
import {ApiData} from '../ApiComponents/MainApiComponent'
import ShowDescriptionComponent from './SowDescriptionComponent'

export default  class MainPage extends React.Component {
    state ={
        shows : [],
    }
    async componentDidMount() {
        const shows = await ApiData();
        this.setState ({shows});
    }

    render() {
        //console.log(this.state.Shows)
        return (
          <div className="App">  
             <ul>
                 <li>{this.state.shows.length>0
                 ?this.state.shows.map((show =>
                     <ShowDescriptionComponent key={show.id}
                      name={show.name} 
                      image={show.image.medium} 
                      language={show.language}  
                      premiered ={show.premiered}
                      id ={show.id}/>)): "loading"}
                 </li>
            </ul>
          </div>
      
        );
      }
      }
     