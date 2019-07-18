import React from "react"
import Sidebar from "./Sidebar.js";
import useUser from '../_service/AuthService.js'
import Login from "./Login.js"
import AppProviders from '../_service'


function Main() {
  const loggedInUser = useUser;
  return(
    <AppProviders>
      {loggedInUser ? <Sidebar /> : <Login />}
    </AppProviders>
  );
}

export default Main