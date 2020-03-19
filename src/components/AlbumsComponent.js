import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    const album = props.photos.map((photo)  => {
        return(
            <div className="col-12 col-md-5 m-1" key={photo.id}>
                <RenderAlbumItem photo={photo}/>
            </div>
        );
    });

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

export default Albums;