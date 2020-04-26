import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderPhoto({photo}){
    return(
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>           
                <CardImg src={photo.image} alt={photo.name}/>
                <CardBody>
                    <CardTitle>{photo.name}</CardTitle>
                    <CardText>{photo.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
};


const PhotoDetail = (props) => {
    const photo = props.photo;
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if(photo != null){
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/albums">Albums</Link></BreadcrumbItem>
                <BreadcrumbItem active>{photo.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{photo.name}</h3>
                    <hr/>
                </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderPhoto photo={photo}/>
                    </div>
                </div>
            </div>           
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default PhotoDetail;