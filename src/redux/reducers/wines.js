import axios from "axios"; 

const CREATE_WINE = "CREATE_WINE"; 
const EDIT_WINE = "EDIT_WINE"; 
const DELETE_WINE = "DELETE_WINE"; 
const GET_DASH = "GET_DASH"; 
const GET_CELLAR = "GET_CELLAR"; 
const ADD_TO_CELLAR = "ADD_TO_CELLAR"; 

const initialState = {
    data: null, 
    loading: false
}

export default function reducer(state = initialState, action) {
    let {type, payload} = action; 

    switch(type) {
        //-CREATE
        case CREATE_WINE + "_PENDING":
            return {
                ...state, 
                loading: true
            }
        case CREATE_WINE + "_FULFILLED": 
            return {
                ...state,
                data: payload.data, 
                loading: false
            }
        case CREATE_WINE + "_REJECTED": 
            return {
                ...state,
                loading: false
            }

        //-EDIT
        case EDIT_WINE + "_PENDING":
            return {
                ...state, 
                loading: true
            }
        case EDIT_WINE + "_FULFILLED": 
            return {
                ...state,
                data: payload.data, 
                loading: false
            }
        case EDIT_WINE + "_REJECTED": 
            return {
                ...state,
                loading: false
            }

            //-DELETE
        case DELETE_WINE + "_PENDING":
            return {
                ...state, 
                loading: true
            }
        case DELETE_WINE + "_FULFILLED": 
            return {
                ...state,
                data: payload.data, 
                loading: false
            }
        case DELETE_WINE + "_REJECTED": 
            return {
                ...state,
                loading: false
            }

            //-GET DASH
            case GET_DASH + "_PENDING":
                return {
                    ...state, 
                    loading: true
                }
            case GET_DASH + "_FULFILLED": 
                return {
                    ...state,
                    data: payload.data, 
                    loading: false
                }
            case GET_DASH + "_REJECTED": 
                return {
                    ...state,
                    loading: false
                }  
                
            //-GET CELLAR
            case GET_CELLAR + "_PENDING":
                return {
                    ...state, 
                    loading: true
                }
            case GET_CELLAR + "_FULFILLED": 
                return {
                    ...state,
                    data: payload.data, 
                    loading: false
                }
            case GET_CELLAR + "_REJECTED": 
                return {
                    ...state,
                    loading: false
                }                  
                
            //-ADD TO CELLAR
            case ADD_TO_CELLAR + "_PENDING":
                return {
                    ...state, 
                    loading: true
                }
            case ADD_TO_CELLAR + "_FULFILLED": 
                return {
                    ...state,
                    data: payload.data, 
                    loading: false
                }
            case ADD_TO_CELLAR + "_REJECTED": 
                return {
                    ...state,
                    loading: false
                }              
            
        default:
            return state
    }
}

export function createWine(body) {
    return {
        type: CREATE_WINE, 
        payload: axios.post("/api/wine", body)
    }
}

export function editWine(id, body) {
    return {
        type: EDIT_WINE, 
        payload: axios.put(`/api/wine/${id}`, body)
    }
}

export function deleteWine(id) {
    return {
        type: DELETE_WINE, 
        payload: axios.delete(`/api/wine/${id}`)
    }
}

export function getDash() {
    return {
        type: GET_DASH, 
        payload: axios.get("api/dash")
    }
}

export function getCellar() {
    return {
        type: GET_CELLAR, 
        payload: axios.get("/api/cellar")
    }
}

export function addToCellar() {
    return {
        type: ADD_TO_CELLAR, 
        payload: axios.post("/api/cellar")
    }
}