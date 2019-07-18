import React from 'react'
import {getToken, login } from '../utils/auth_utils'
const AuthContext = React.createContext(localStorage.getItem('current_user'))
const useAuth = () => React.useContext(getToken())
export {useAuth}