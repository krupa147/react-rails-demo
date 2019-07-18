import getUser from './auth_utils'

async function userData(){
    const data = await getUser()
    data ? data : null
}

export {userData }