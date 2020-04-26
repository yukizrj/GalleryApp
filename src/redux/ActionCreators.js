import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addPhoto = (photo) => ({
    type: ActionTypes.ADD_PHOTO,
    payload: photo
});

export const postPhoto = (name, image, description) => (dispatch) => {
    const Photo = {
        id: null,
        name: name,
        image: image,
        description: description
    }
    console.log("new photo data is: "+JSON.stringify(Photo));

    return fetch(baseUrl + 'newPhoto', {
        method: "POST",
        body: JSON.stringify(Photo),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          console.log('post photos', error.message);
        }
      })
    .then(response => response.json())
    .then(response => dispatch(addPhoto(response)))
}

export const fetchPhotos = () => (dispatch) => {

    dispatch(photosLoading(true));

    //setTimeout(() => {
    //    dispatch(addPhotos(PHOTOS));
    //}, 2000);

    return fetch(baseUrl + 'photos')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(objects => dispatch(addPhotos(objects.photos)))
    .catch(error => dispatch(photosFailed(error.message)));
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