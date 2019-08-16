const initialState = {
    token: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_START':
            return {
                ...state,
                error: null,
                loading: true
            };
        case 'AUTH_SUCCESS':
            console.log(action.token);
            return {
                ...state,
                token: action.token,
                error: null,
                loading: false
            };
        case 'AUTH_FAIL':
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case 'AUTH_LOGOUT':
            return {
                ...state,
                token: null
            }
        default: 
            return state
    }
   
}

export default reducer;