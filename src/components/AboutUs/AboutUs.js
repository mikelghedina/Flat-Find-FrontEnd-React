import React from "react";
import {Button, Card, Row} from "react-bootstrap";
import './AboutUs.css'
import gemma from '../../profileImages/Gemma.jpg'
import edgar from '../../profileImages/Edgar.jpeg'
import miguel from '../../profileImages/Miguel.jpeg'
import mikel from '../../profileImages/Mikel.jpg'
import linkedin from './linkedin.png'

const AboutUs =()=>(
    <div>
        <div className='title'>Equipo</div>
        <Row className='row'>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top" src={gemma} />
                    <Card.Body>
                        <Card.Title>Gemma Reverter</Card.Title>
                        <Card.Text>
                            FrontEnd Developer
                        </Card.Text>
                        <Button className='link' variant="primary" href='https://www.linkedin.com/in/gemmareverter/'><img src={linkedin} alt='linkedin' className='linkedin'/></Button>
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
                        <Button className='link' variant="primary" href='https://www.linkedin.com/in/mikelghedina/'><img src={linkedin} alt='linkedin' className='linkedin'/></Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top"  src={edgar} />
                    <Card.Body>
                        <Card.Title>Edgar Rodriguez</Card.Title>
                        <Card.Text>
                            BackEnd Developer
                        </Card.Text>
                        <Button className='link' variant="primary" href='https://www.linkedin.com/in/edgarrodriguezdelacalle/'><img src={linkedin} alt='linkedin' className='linkedin'/></Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='column'>
                <Card className='card'>
                    <Card.Img className='img' variant="top"  src={miguel} />
                    <Card.Body>
                        <Card.Title>Miguel Romera</Card.Title>
                        <Card.Text>
                            Data Analyst
                        </Card.Text>
                        <Button className='link' variant="primary" href='https://www.linkedin.com/in/miguelromeraalegre/'><img src={linkedin} alt='linkedin' className='linkedin'/></Button>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    </div>

);


export default AboutUs;