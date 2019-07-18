import React from 'react'
import {AuthProvider} from './AuthService.js'

function AppProviders({children}) {
  return (
    <AuthProvider>
    </AuthProvider>
  )
}

export default AppProviders
