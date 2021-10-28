import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container, Card} from 'react-bootstrap';

export class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                
                    <Container>
              <Row>
                <Col xs>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="realistic.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Love Movies</Card.Title>
                   
                 </Card.Body>
               </Card>
                </Col>
                <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="action-movies.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Action Movies</Card.Title>
                   
                 </Card.Body>
               </Card></Col>
                <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="horror.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Horror Movies</Card.Title>
                   
                 </Card.Body>
               </Card></Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col xs>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="Dumband.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Commedy Movies</Card.Title>
                    
                 </Card.Body>
               </Card>
                </Col>
                <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="download.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Music Movies</Card.Title>
                    
                 </Card.Body>
               </Card></Col>
                <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="download (1).jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Horror Movies</Card.Title>
                   
                 </Card.Body>
               </Card></Col>
              </Row>
            </Container> 
        
            </div>
        )
    }
}

export default Gallery
