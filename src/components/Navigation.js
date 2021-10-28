import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

 class Navigation extends Component {
  render() {
    return (
      <div>
          <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
             <Navbar.Brand>
               <img src="logo192.png" alt="logo" width="40px" height="40px" />
             </Navbar.Brand>
             <Navbar.Toggle />
             <Navbar.Collapse >
             <Nav>
             <Link to="/">
               <Nav.Link href="About Us"><ul><li>Home</li></ul></Nav.Link>
               </Link>
               <Link to="/about">
               <Nav.Link href="About Us"><ul><li>AboutUs</li></ul></Nav.Link>
               </Link>
               <Link to="/gallery">
               <Nav.Link href="Gallery"><ul><li>Gallery</li></ul></Nav.Link>
               </Link>
               <Link to="/movies">
               <Nav.Link href="Movies"><ul><li>Movies</li></ul></Nav.Link>
               </Link>             
              </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}

export default Navigation
