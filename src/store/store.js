import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterslice';
import postsReducer from '../slices/postslice';
// const sagaMiddleware = createSagaMiddleware()

// const rootReducer = combineReducers({

//     counter : counterReducer,
//     user : userReducer,
//     product: productreducer,
//     regi : regireducer

// })

const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postsReducer
    }
});

// sagaMiddleware.run(rootSaga);

export default store;