import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderAlbumItem ({photo}){
    return(
        <Card>
            <Link to={`/albums/${photo.id}`}>
            <CardImg width="100%" src={photo.image} alt={photo.name}/>
            <CardImgOverlay>
                <CardTitle>{photo.name}</CardTitle>
            </CardImgOverlay>
            </Link> 
        </Card>
    );
}

const Albums =(props) => {
    const album = props.photos.photos.map((photo)  => {
        return(
            <div className="col-12 col-md-5 m-1" key={photo.id}>
                <RenderAlbumItem photo={photo}/>
            </div>
        );
    });
    if (props.photos.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.photos.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.photos.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Albums</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Albums</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {album}
                </div>
            </div>
        );
    }
}  

export default Albums;