import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Photos } from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos: Photos
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}