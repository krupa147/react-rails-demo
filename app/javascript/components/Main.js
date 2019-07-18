import React from "react"
import Sidebar from "./Sidebar.js";
import useUser from '../_service/AuthService.js'
import Login from "./Login.js";


function Main() {
  const loggedInUser = useUser;
  return loggedInUser ? <Sidebar /> : <Login />
}

export default Main