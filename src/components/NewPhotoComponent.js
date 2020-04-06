import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const required = (val) => val && val.length;

class NewPhoto extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            images: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSubmit(values) {
        //upload image to assets/images folder
        const data = new FormData();
        data.append('file', this.state.images);
        axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
            })
            .then(res => { // then print response status
            console.log(res.statusText)
        })
        // event.preventDefault();
        //add new photo object
        const imgpath = "assets/images/" + this.state.images.name;
        this.props.addPhoto(values.name, imgpath, values.description);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'file' ? target.files[0] : target.value;
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
                            <Label htmlFor="images" md={2}>Choose photo</Label>
                            <Col md={10}>
                            <Control.file model=".images" id="images" name="images"
                                accept='.jpg, .png, .jpeg'
                                
                                onChange={this.handleInputChange}/>
                            </Col>
                            
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