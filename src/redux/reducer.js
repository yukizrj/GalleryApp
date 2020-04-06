import {PHOTOS} from '../shared/photos';
import * as ActionTypes from './ActionTypes';

export const Photos = (state = PHOTOS, action) => {
    switch(action.type){
        case ActionTypes.ADD_PHOTO:
            var photo = action.payload;
            photo.id = state.length;
            console.log("new photo is: ", photo);
            return state.concat(photo);
        
        default:
            return state;
    }
};
