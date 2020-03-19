import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function NewPhoto(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>New Photo</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <div className="col-12">
                <h3>Add New Photo</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <p>......this function is under construction.....</p>
                </div>
                </div>                
            </div>
        </div>
    );
}

export default NewPhoto;