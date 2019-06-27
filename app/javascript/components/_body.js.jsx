import React from "react"
import PropTypes from "prop-types"
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import AllProjects from "./_all_projects.js";
import AllTodos from "./AllTodos.js";
class Body extends React.Component{
    render(){
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={AllProjects}/>
            <Route path='/projects' component={AllProjects}/>
            <Route path='/todos' component={AllTodos}/>
          </Switch>
        </BrowserRouter>
      );
    }
  }

  export default Body
