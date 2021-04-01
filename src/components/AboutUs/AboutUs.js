import React from "react";
import {Button, Card, Row} from "react-bootstrap";
import './AboutUs.css'
import gemma from '../../profileImages/Gemma.jpg'
import edgar from '../../profileImages/Edgar.jpeg'
import miguel from '../../profileImages/Miguel.jpeg'
import mikel from '../../profileImages/Mikel.jpeg'


const AboutUs =()=>(
    <div>
        <Row className='row'>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top" src={gemma} />
                    <Card.Body>
                        <Card.Title>Gemma Reverter</Card.Title>
                        <Card.Text>
                            FullStack Developer
                        </Card.Text>
                        <Button variant="primary" href='https://www.linkedin.com/in/gemmareverter/'>My Linkedin</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top"  src={mikel} />
                    <Card.Body>
                        <Card.Title>Miguel A. Arregui</Card.Title>
                        <Card.Text>
                            FullStack Developer
                        </Card.Text>
                        <Button variant="primary" href='https://www.linkedin.com/in/mikelghedina/'>My Linkedin</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top"  src={edgar} />
                    <Card.Body>
                        <Card.Title>Edgar Rodriguez</Card.Title>
                        <Card.Text>
                            Back-End Developer
                        </Card.Text>
                        <Button variant="primary" href='https://www.linkedin.com/in/edgarrodriguezdelacalle/'>My Linkedin</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top"  src={miguel} />
                    <Card.Body>
                        <Card.Title>Miguel Romera</Card.Title>
                        <Card.Text>
                            Statistical
                        </Card.Text>
                        <Button variant="primary" href='https://www.linkedin.com/in/miguelromeraalegre/'>My Linkedin</Button>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    </div>

);


export default AboutUs;