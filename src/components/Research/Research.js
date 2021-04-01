import React, {Component} from "react";
import {Button,  Col, Form, Row} from "react-bootstrap";
import {fetchPrice, postPrice} from "../../store/actions/PriceActionTypes/priceActions";
import {connect} from "react-redux";
import './Research.css';


class Research extends Component {


    state={
        district_name:['Ciutat Vella', 'Eixample'],
        sup:'',
        baths:'',
        rooms:''
    }

    componentDidMount() {
        this.props.fetchPrice()
    }

    handleOnClickSubmit=()=>{

        this.props.postPrice(this.state)
        console.log(this.state)

    }

    render() {

        return(
            <React.Fragment>
                <div className='background'>
                    <Form className='form' onSubmit={this.handleOnClickSubmit}>
                        <Form.Group as={Row}>
                            <Col className='preguntas'>
                                ¿En que distrito quieres vivir?
                            </Col>                                
                            <Col>
                                <Form.Control as='select' type='text' className='formulario' placeholder="district" custom value={this.state.district_name} onChange={(event)=>(this.setState({...this.state, district_name:event.target.value}))} >
                                    {this.state.district_name.map(d=>
                                    <option>{[d]}</option>
                                    )}</Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                ¿Cuantos baños necesitas?
                            </Col> 
                            <Col>
                                <Form.Control type="number" className='formulario' placeholder="baths" value={this.state.baths} onChange={(event)=>this.setState({baths: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})} />
                            </Col>
                        </Form.Group>
                        <Form.Group  as={Row}>
                            <Col>
                                ¿Cuantos metros² quieres?
                            </Col> 
                            <Col>
                                <Form.Control type="number" className='formulario' placeholder="sup" value={this.state.sup} onChange={(event)=>this.setState({sup: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})} />
                            </Col>
                        </Form.Group>
                        <Form.Group  as={Row}>
                            <Col>
                            ¿Cuantas habitaciones necesitas?
                            </Col> 
                            <Col>
                                <Form.Control type="number" className='formulario' placeholder="rooms" value={this.state.rooms} onChange={(event)=>this.setState({rooms: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})} />
                            </Col>
                        </Form.Group>
                        <Button onClick={this.handleOnClickSubmit}>Submit</Button>
                    </Form>
                </div>
            </React.Fragment>

        )
    }
}
const mapStateToProps=(state)=>{
    return{
        price:state.price.priceData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        postPrice:(data)=>dispatch(postPrice(data)),
        fetchPrice:()=>dispatch(fetchPrice())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Research)