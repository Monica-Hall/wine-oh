import axios from "axios"; 

const REGISTER_USER = "REGISTER_USER"; 
const LOGIN_USER = "LOGIN_USER"; 
const LOGOUT_USER = "LOGOUT_USER"; 

const initialState = {
    user: null, 
    loading: false
}

export default function reducer(state = initialState, action) {
    let {type, payload} = action

    switch(type) {

        //-REGISTER
        case REGISTER_USER + "_PENDING":
            return {
                ...state, 
                loading: true
            }
        case REGISTER_USER + "_FULFILLED": 
            return {
                ...state,
                user: payload.data, 
                loading: false
            }
        case REGISTER_USER + "_REJECTED": 
            return {
                ...state,
                loading: false
            }
        
        //-LOGIN
        case LOGIN_USER + "_PENDING": 
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER + "_FULFILLED": 
            return {
                ...state,
                user: payload.data, 
                loading: false
            }
        case LOGIN_USER + "_REJECTED": 
            return {
                ...state,
                loading: false
            }

        //-LOGOUT
        case LOGOUT_USER + "_PENDING": 
            return {
                ...state,
                loading: true
            }
        case LOGOUT_USER + "_FULFILLED": 
            return {
                ...state,
                user: null, 
                loading: false
            }
        case LOGOUT_USER + "_REJECTED": 
            return {
                ...state,
                loading: false
            }
        
        default:
            return state
    }
}

export function register(userInfo) {
    return {
        type: REGISTER_USER, 
        payload: axios.post("/auth/register", userInfo)
    }
} 

export function login(userInfo) { 
    return {
        type: LOGIN_USER, 
        payload: axios.post("/auth/login", userInfo)
    }
}

export function logout() {
    return {
        type: LOGOUT_USER, 
        payload: axios.delete("/auth/logout")
    }
}