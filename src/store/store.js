import {createStore, combineReducers, applyMiddleware}  from 'redux';
import counterReducer from '../reducer/counterReducer';
import userReducer from '../reducer/userReducer';
import thunk from 'redux-thunk';
import productreducer from '../reducer/productreducer';

const rootReducer = combineReducers({

    counter : counterReducer,
    user : userReducer,
    product: productreducer

})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;