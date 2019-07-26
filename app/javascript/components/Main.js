import React from "react"
import Sidebar from "./Sidebar.js";
import useUser from '../_service/AuthService.js'
import Login from "./Login.js"
import {AuthProvider} from '../_service/AuthService.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AllProjects from "./_all_projects.js";
import AllTodos from "./AllTodos.js";
import EditProjectForm from './EditProjectForm.js.jsx';
import ProjectForm from './ProjectForm.js';
import ShowProject from './ShowProject.js'
import PrivateRoute from './PrivateRoute.js'


function Main(props) {
  const loggedInUser = useUser;
  console.log(loggedInUser);
  console.log("IN main")
  return(
    <AuthProvider>
      <BrowserRouter>
      <Switch>
      <React.Fragment>
       <div>
         <AuthProvider>
           <BrowserRouter>
             <Switch>
               <Route exact path="/" component={loggedInUser ? AllProjetcs : Login} />
               <PrivateRoute exact path='/projects' component={AllProjects}/>
               <PrivateRoute path='/todos' component={AllTodos}/>
               <PrivateRoute path='/edit/:id' component={EditProjectForm} />
               <PrivateRoute path='/projects/create' component={ProjectForm} />
               <PrivateRoute exact path='/projects/:id' component={ShowProject} />
             </Switch>
           </BrowserRouter>
         </AuthProvider>
       </div>
     </React.Fragment>
        <Sidebar />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Main