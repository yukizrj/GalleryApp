import React, { Component } from 'react';
import Albums from './AlbumsComponent';
import {PHOTOS} from '../shared/photos';
import PhotoDetail from './PhotoDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NewPhoto from './NewPhotoComponent';
import { connect } from 'react-redux';
import {postPhoto, fetchPhotos} from '../redux/ActionCreators';

//map state to props from app to main
const mapStateToProps = state => {
    return {
      photos: state.photos
    }
  }

const mapDispatchToProps = dispatch =>({
    postPhoto: (name, image, description) => dispatch
    (postPhoto(name, image, description)),
    fetchPhotos: () => { dispatch(fetchPhotos())}
});

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            photos: PHOTOS
        };
    }

    componentDidMount() {
        this.props.fetchPhotos();
      }

    render(){

        const HomePage = () =>{
            return(
                <Home/>
            );
        }

        const PhotoWithId = ({match}) =>{
            return(
                <PhotoDetail photo={this.props.photos.photos.filter((photo) => photo.id === parseInt(match.params.photoId,10))[0]}
                isLoading={this.props.photos.isLoading}
                errMess={this.props.photos.errMess}/>
            );
        };

        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/albums" component={() => <Albums photos={this.props.photos}/>}/>
                    <Route path="/albums/:photoId" component={PhotoWithId}/>
                    <Route exact path="/newphoto" component={() => <NewPhoto postPhoto={this.props.postPhoto}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));