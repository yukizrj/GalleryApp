import React, { Component } from 'react';
import Albums from './AlbumsComponent';
import {PHOTOS} from '../shared/photos';
import PhotoDetail from './PhotoDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewPhoto from './NewPhotoComponent';

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            photos: PHOTOS
        };
    }

    

    render(){

        const HomePage = () =>{
            return(
                <Home/>
            );
        }

        const PhotoWithId = ({match}) =>{
            return(
                <PhotoDetail photo={this.state.photos.filter((photo) => photo.id === parseInt(match.params.photoId,10))[0]}/>
            );
        };

        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/albums" component={() => <Albums photos={this.state.photos}/>}/>
                    <Route path="/albums/:photoId" component={PhotoWithId}/>
                    <Route exact path="/newphoto" component={NewPhoto}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default Main;