import {createStore, combineReducers,applyMiddleware,compose} from 'redux'
import promiseMiddleware from 'redux-promise'

import tabbar from './tabbar'

var reducer = combineReducers({
    tabbar
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(promiseMiddleware)
 ));

export default store