import api from "../components/api";

const token_key = 'react_rails_token'

function getUser(){
    headers = { Authorization: getToken() }
    api.get('api/v1/profile', { headers: headers })
    .then((response) => { return response.data })
}

function getToken() {
    return window.localStorage.getItem(token_key)
}

function setToken(token) {
    window.localStorage.setItem(token_key, token)
}

function login(email, password){
    data =  { 'email': email, 'password': password}
    api.post('login', data)
    .then((response) => { setToken(response.data.token) })
}

function register(email, password, password_confirmation, name){
    data = { 'email': email, 'password': password, 'password_confirmation': password_confirmation,
              'name': name}
    api.post('register', data)
    .then((response) => { setToken(response.data.token) })
}

function logout() {
    window.localStorage.removeItem(token_key)
}

export { getToken, login, register, logout, getUser}