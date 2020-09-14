import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { shopReducer } from './shop/shopReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(shopReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store