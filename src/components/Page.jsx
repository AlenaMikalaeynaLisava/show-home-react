import React, {Component} from 'react'
import {ApiData} from '../ApiComponents/MainApiComponent'
import ShowDescriptionComponent from './SowDescriptionComponent'

export default  class MainPage extends React.Component {
    state ={
        Shows : [],
    }
    async componentDidMount() {
        const Shows = await ApiData();
        this.setState ({Shows});
    }

    render() {
        //console.log(this.state.Shows)
        return (
          <div className="App">  
             <ul>
                 <li>{this.state.Shows.length>0
                 ?this.state.Shows.map((show =>
                     <ShowDescriptionComponent key={show.id}
                      name={show.name} 
                      image={show.image} 
                      language={show.language}  
                      premiered ={show.premiered}
                      id ={show.id}/>)): "loading"}
                 </li>
            </ul>
          </div>
      
        );
      }
      }
     