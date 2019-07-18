import api from "../components/api";

const token_key = 'react_rails_token'

function getUser(){
    
}

function getToken() {
    return window.localStorage.getItem(token_key)
}

function setToken(token) {
    window.localStorage.setItem(token_key, token)
}

function login(email, password){
    data = {'user': { 'email': email, 'password': password}}
    api.post('login', data)
    .then((response) => { setToken(response.headers['Authorization']) })
}

function register(email, password){
    data = {'user': { 'email': email, 'password': password}}
    api.post('signup', data)
    .then((response) => { setToken(response.headers['Authorization']) })
}

function logout() {
    window.localStorage.removeItem(token_key)
}

export { getToken, login, register, data}