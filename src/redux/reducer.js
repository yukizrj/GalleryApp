
import * as ActionTypes from './ActionTypes';

export const Photos = (state = { isLoading: true,
    errMess: null,
    photos:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PHOTOS:
            return {...state, isLoading: false, errMess: null, photos: action.payload};

        case ActionTypes.PHOTOS_LOADING:
            return {...state, isLoading: true, errMess: null, photos: []}

        case ActionTypes.PHOTOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_PHOTO:
            var photo = action.payload;
            photo.id = state.photos.length;
            console.log("new photo is: ", photo);
            return {...state, isLoading: false, errMess: null, photos: state.photos.concat(photo)};

        default:
            return state;
    }
};
