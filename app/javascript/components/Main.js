import React from "react"
import Sidebar from "./Sidebar.js";
import useUser from '../_service/AuthService.js'
import Login from "./Login.js"
import {AuthProvider} from '../_service/AuthService.js'
import {BrowserRouter, Switch} from 'react-router-dom'


function Main(props) {
  const loggedInUser = useUser;
  console.log(props);
  return(
    <AuthProvider>
      <BrowserRouter>
      <Switch>
        {loggedInUser ? <Sidebar /> : <Login props={props}/>}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Main