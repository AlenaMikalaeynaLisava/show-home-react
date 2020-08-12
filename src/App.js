import React from 'react';
import './App.css';
import Page from './components/Page';
import ShowPage from './components/ShowPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {

  render() {

  return (
    <Router>
      <Switch>
        <Route path = '/' exact> 
          Page : <Page />
        </Route>   
        <Route path = '/ShowDescription/:id' exact> 
          ShowPage : <ShowPage />
        </Route>   
        <Route> 
          <div> 404 not faund </div>
        </Route>    
      </Switch>
    </Router>

  );
}
}
export default App;



