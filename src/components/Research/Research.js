import React, {Component} from "react";
import axios from "axios"
import {Button, Form} from "react-bootstrap";



class Research extends Component {

    state = {
        price: '',
        district_name: 'Eixample',
        sup: '80',
        baths: '2',
        rooms: '3',
    }

    handlePriceRequest() {

        axios.get('http://localhost:5000/est/', {params:{
                district_name: this.state.district_name,
                sup: this.state.sup,
                baths: this.state.baths,
                rooms: this.state.rooms,
            }}
        ).then(response => {
            const price = response.data
            console.log(price)
            this.setState(prevState=>({price,...prevState.price.price}))
        }).catch(error => console.log(error))
    }


    render() {

        return(
            <div>
                <Form onSubmit={this.handlePriceRequest}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='text' placeholder="district" value={this.state.district_name} onChange={(event)=>this.setState({district_name:event.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="number" placeholder="baths" value={this.state.baths} onChange={(event)=>this.setState({baths:event.target.value})} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="number" placeholder="sup" value={this.state.sup} onChange={(event)=>this.setState({sup:event.target.value})} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="number" placeholder="rooms" value={this.state.rooms} onChange={(event)=>this.setState({rooms:event.target.value})} />
                    </Form.Group>
                    <Button type="submit" onSubmit={this.handlePriceRequest}>
                        Submit
                    </Button>
                </Form>
                <p>{this.state.price}</p>
            </div>
        )
    }
}

export default Research;