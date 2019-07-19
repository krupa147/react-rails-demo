import React, { useState } from 'react'
import {useAsync} from 'react-async'
import * as AuthClient from '../utils/auth_utils'
import userData from '../utils/user_data'

const AuthContext = React.createContext()
function AuthProvider(props){
    const [firstAttemptFinished, setfirstAttemptFinished] = useState(false)
    const {
        data = null,
        error,
        isRejected,
        isPending,
        isSettled,
        reload
    } = useAsync({
        promiseFn: userData,
    })

    React.useLayoutEffect(()=>{
        if(isSettled){
            setfirstAttemptFinished(true)
        }
    }, [isSettled]
    )

    if(!firstAttemptFinished){
        if(isPending){
            return <div>Loading..</div>;
        }
        if(isRejected){
            return (
                <div css={{color: 'red'}}>
                  <p>Uh oh... There's a problem. Try refreshing the app.</p>
                  <pre>{error.message}</pre>
                </div>
              )
        }
    }

    const login = (email, password) => { AuthClient.login(email, password).then(reload) }
    const register = form => AuthClient.register(form).then(reload)
    const logout= () => AuthClient.logout.then(reload)

    return (
        <AuthContext.Provider value={{data, login, logout, register}} {...props} />
      )
    
}

function useAuth(){
    const context = React.useContext(AuthContext)
    if(context === undefined){
        throw new Error('useAuth must be used within authProvider')
    }
    return context;
}

export {AuthProvider, useAuth }