import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';

const required = (val) => val && val.length;

class NewPhoto extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            images: []
        };

        this.onDrop = this.onDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onDrop(picture){
        this.setState({
            images: this.state.images.concat(picture),
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>New Photo</BreadcrumbItem>
                    </Breadcrumb>               
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Upload a new photo</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                                singleImage={true}
                                withPreview={true}
                                fileSizeError='size is too big'
                                fileTypeError='is not supported file extension.'
                            />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Photo name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" className="form-control" id="name" name="name" placeholder="Photo Name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    validators={{required}}/>
                                    <Errors className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'name is required'
                                        }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={2}>Enter description</Label>
                                <Col md={10}>
                                    <Control.textarea model=".description"className="form-control" id="desctiption" name="description"
                                        rows="12"
                                        value={this.state.description}
                                        onChange={this.handleInputChange}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit Photo
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </div>
                </div>              
            </div>
        );
    }

    
}

export default NewPhoto;