import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxLogger from "redux-logger";
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxLogger, thunk))
);

export default store