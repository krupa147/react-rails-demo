import API from '../components/api'
const token_key = 'react_rails_token'

function getUser(){
    headers = { Authorization: getToken() }
    API.get('api/v1/profile', { headers: headers })
    .then((response) => { return response.data })
}

function getToken() {
    return window.localStorage.getItem(token_key)
}

function setToken(token) {
    window.localStorage.setItem(token_key, token)
}

function handle_response(response){
    setToken(response.data.data.token);
    return response.data.data;
}

function login(email, password){
    let data =  { 'email': email, 'password': password}
    return API.post('login', data)
    .then(response => { handle_response(response) })
}

function register(email, password, password_confirmation, name){
    let data = { 'email': email, 'password': password, 'password_confirmation': password_confirmation,
              'name': name}
    API.post('register', data)
    .then((response) => { setToken(response.data.token) })
}

function logout() {
    window.localStorage.removeItem(token_key)
}

export { getToken, login, register, logout, getUser}