import {createStore, combineReducers, applyMiddleware}  from 'redux';
import counterReducer from '../reducer/counterReducer';
import userReducer from '../reducer/userReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import productreducer from '../reducer/productreducer';
import { rootSaga } from '../saga';


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({

    counter : counterReducer,
    user : userReducer,
    product: productreducer

})

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;