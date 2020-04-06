import * as ActionTypes from './ActionTypes';

export const addPhoto = (name, image, description) => ({
    type: ActionTypes.ADD_PHOTO,
    payload: {
        name: name,
        image: image,
        description: description
    }
});