import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';


export default () => {
    const store  = createStore(
        authReducer,
        applyMiddleware(thunk)
    )

    return store;
}