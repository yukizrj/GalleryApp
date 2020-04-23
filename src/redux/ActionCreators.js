import * as ActionTypes from './ActionTypes';
import {PHOTOS} from '../shared/photos';

export const addPhoto = (name, image, description) => ({
    type: ActionTypes.ADD_PHOTO,
    payload: {
        name: name,
        image: image,
        description: description
    }
});

export const fetchPhotos = () => (dispatch) => {

    dispatch(photosLoading(true));

    setTimeout(() => {
        dispatch(addPhotos(PHOTOS));
    }, 2000);
}

export const photosLoading = () => ({
    type: ActionTypes.PHOTOS_LOADING
});

export const photosFailed = (errmess) => ({
    type: ActionTypes.PHOTOS_FAILED,
    payload: errmess
});

export const addPhotos = (photos) => ({
    type: ActionTypes.ADD_PHOTOS,
    payload: photos
});