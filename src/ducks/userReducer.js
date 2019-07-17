import axios from 'axios'

let initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'


export const requestUserData = () => {
    let users = axios.get('/auth/user-data').then(res => res.data)

    return {
        type: REQUEST_USER_DATA,
        payload: users
    }
}



export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_USER_DATA + '_FULFILLED':
            return { ...state, ...action.payload.user, loading: false }
        // case REQUEST_USER_DATA + '_REJECTED':
        //     return { ...state, loading: false }
        default:
            return state
    }

}



