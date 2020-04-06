import {createStore, combineReducers} from 'redux';
import { Photos } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos: Photos
        })
    );

    return store;
}