# GalleryApp
>>>>>>> 90d811a6b9c4ee6fb34e66d737d1643af361f0bc

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How to run project
In the project directory, open two command promps:

one promp run the react app
### `yarn start`
and the other promp window run the server
### `nodemon server.js`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Troubleshoot
- react-images-upload compile issue

  -**Message:** Module not found: A package is trying to access another package without the second one being listed as a dependency of the first one.
  
  -**Solution:** install peer dependencies(react, react-dom, react-flip-move, react-images-upload)

