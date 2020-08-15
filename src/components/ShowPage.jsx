
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {GetSHOW} from '../ApiComponents/MainApiComponent'
import ShowDescriptionComponent from './SowDescriptionComponent'


//  function ShowPaje() {
//     return(
//         <div> Test</div>
//     )
// }

class ShowPaje extends Component{
    state ={
        show : null,
    }
    async componentDidMount() {
        const show = await GetSHOW(this.props.match.params.id);
        this.setState ({show});
    }
    render(){
        return this.state.show?<ShowDescriptionComponent {...this.state.show}></ShowDescriptionComponent>:"..."
        
    }
}


export default withRouter(ShowPaje);