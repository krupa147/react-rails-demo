import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from 'react-router-dom'
import { getToken } from "../utils/auth_utils";
import Sidebar from "./Sidebar";

const PrivateRoute = ({ component: Component, ...rest }) => (
  < Route {...rest  } 
    render={(props) => getToken() ? (<Sidebar>< Component {...props} /></Sidebar>) : (< Redirect to="/"/> ) }
    />
)

export default PrivateRoute;


