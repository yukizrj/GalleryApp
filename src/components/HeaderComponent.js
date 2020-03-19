import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
        isNavOpen: false
    };
}

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}

 render() {
    return(
        <div>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='My Gallery' /></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/albums'><span className="fa fa-film fa-lg"></span>Albums</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/newphoto'><span className="fa fa-camera-retro fa-lg"></span>New Photo</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>My Gallery</h1>
                        <p>This is just a test project for learning React, all photos are shot by author. Peace and Love</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    </div>
    );
  }
}

export default Header;