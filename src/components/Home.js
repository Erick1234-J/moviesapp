import React, { Component } from 'react'
import { Row, Col, Container, Card} from 'react-bootstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner">
              <div className="banner-title">
                  <h1>MOVIES <span className="title">GALERY</span></h1>
                  <p>Live <span className="title">the moment</span></p>
                  <img src="Icon.jpg" alt="logo" width="100px" height="100px"  />
              </div>
          </div>
          {/*  section  */}
          <div className="container"> 
              <h1>About <span className="header">Movies</span></h1>
          <div className="content">
          <Container>
              <Row>
                <Col xs>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="realistic.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Love Movies</Card.Title>
                    <Card.Text>
                    Romance films or romance movies are romantic love stories recorded in visual media for 
                    broadcast in theaters and on TV that focus on passion. 
                    </Card.Text>
                 </Card.Body>
               </Card>
                </Col>
                <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="action-movies.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Action Movies</Card.Title>
                    <Card.Text>
                    What is considered an action movie?
                    Image result for what are action movies
                     Action film is a film genre in which the protagonist or protagonists. 
                    </Card.Text>
                 </Card.Body>
               </Card></Col>
                <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="horror.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Horror Movies</Card.Title>
                    <Card.Text>
                    Horror films may incorporate incidents of physical violence and psychological 
                    terror; they may be studies of deformed, disturbed, psychotic, or evil characters;
                    </Card.Text>
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
                    <Card.Text>
                    Comedy is a genre of film in which the main emphasis is on humour. These films are designed 
                     make the audience laugh.
                    </Card.Text>
                 </Card.Body>
               </Card>
                </Col>
                <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="download.jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Music Movies</Card.Title>
                    <Card.Text>
                    What is considered an action movie?
                    Image result for what are action movies
                     Action film is a film genre in which the protagonist or protagonists. 
                    </Card.Text>
                 </Card.Body>
               </Card></Col>
                <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="download (1).jpg" alt="realistic" width="200px" height="200px" />
                   <Card.Body>
                   <Card.Title>Horror Movies</Card.Title>
                    <Card.Text>
                    Horror films may incorporate incidents of physical violence and psychological 
                    terror; they may be studies of deformed, disturbed, psychotic, or evil characters;
                    </Card.Text>
                 </Card.Body>
               </Card></Col>
              </Row>
            </Container> 
            
          </div>
         </div> 
         
             
      </div>
        )
    }
}

export default Home
