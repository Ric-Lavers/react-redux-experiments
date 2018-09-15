import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import { initialState as data } from './reducer';
let initialState = {
	data
};
// const persistConfig = {
//   key: 'root',
//   storage,
// }
/* @@GENERATOR:IMPORT */
const rootReducer = combineReducers({
	/* @@GENERATOR:REDUCER:ASSIGN */
	data,
	routing: routerReducer,
});

// Helper to see if this script is running in node or the browser
const isClient = typeof window !== 'undefined';

if (isClient && window['__REDUX_STATE__']) {
	initialState = Object.assign({}, initialState, window['__REDUX_STATE__']);
}

const routingMiddleware = routerMiddleware(/* history */);//import createHistory from 'history/createBrowserHistory';
const middlewares = [thunk, routingMiddleware];
const enhancers = [];

if (process.env.NODE_ENV !== 'production') {
	/*eslint-disable */ // Allow no dot notation
	const devToolsExtension = window['devToolsExtension'];

	/*eslint-enable */
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createReduxStore = () => {
	return createStore(rootReducer, initialState, composedEnhancers);
};

const store = createReduxStore(); // Allow require and no dot notation

// /* Hot reloading of reducers.  How futuristic!! */
// /*eslint-disable */ if (module['hot']) {
// 	module['hot'].accept('./reducer', () => {
// 		const nextRootReducer = require('./reducer').default;

// 		/*eslint-enable */
// 		store.replaceReducer(nextRootReducer);
// 	});
// }

export default store;