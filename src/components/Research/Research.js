import React, {Component} from "react";
import {Button,  Col, Form, Row, Modal} from "react-bootstrap";
import {fetchPrice, postPrice} from "../../store/actions/PriceActionTypes/priceActions";
import {connect} from "react-redux";
import logo from '../../logo.png'
import './Research.css';

class Research extends Component {
    state={
        district_names:["Ciutat Vella","Eixample", "Gracia","Horta" , "Les Corts" , "Nou Barris" , "Sant Andreu", "Sant Marti","Sants Montjuic", "Sarria"],
        district_name:'',
        sup:'',
        sup_list:[40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200],
        bath_list:[1,2,3],
        baths:'',
        room_list:[1,2,3,4,5],
        rooms:'',
        onShow:false, 
    }

    componentDidMount() {
        this.props.fetchPrice()
    }

    handleOnClickSubmit=()=>{
        this.props.postPrice(this.state)
        console.log(this.state)
        this.setState({onShow:true})

    }
    handleOnHide=()=>{
        this.setState({onShow:false})
    }

    render() {
        return(
            <React.Fragment>
                <Modal show={this.state.onShow} onHide={this.handleOnHide} >
                    
                    <Modal.Header className='modalHeader' closeButton>
                        <img src={logo} alt='logo' className='logoModal'/>
                    </Modal.Header>
                    <Modal.Body className='modalBody' closeButton>El precio estimado de vivir en {this.state.district_name} con {this.state.sup} metros²,<br/> {this.state.rooms} habitaciones y {this.state.baths} baños es de {this.props.price.price}€</Modal.Body>
                    <div className='linia3'></div>
                </Modal>
                <div className='backgroundR'>
                    <Form className='form' onSubmit={this.handleOnClickSubmit}>
                        <Form.Group as={Row}>
                            <Col className='preguntas'>
                                ¿En que distrito quieres vivir?
                            </Col>                                
                            <Col>
                                <Form.Control as='select'  type='text' className='formulario'  value={this.state.district_name} onChange={(event)=>(this.setState({district_name:event.target.value}))} >
                                    <option disabled selected value=''>Distrito</option>
                                    {this.state.district_names.map(d=>{
                                    return <option key={d} value={d}>{[d]}</option>
                                })}</Form.Control>
                            </Col>
                        </Form.Group>                        
                        <Form.Group  as={Row}>
                            <Col className='preguntas'>
                                ¿Cuantos metros² quieres?
                            </Col> 
                            <Col>
                                <Form.Control as='select' type="number" className='formulario' placeholder="sup" value={this.state.sup} onChange={(event)=>this.setState({sup: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})}>
                                <option disabled selected value=''>Metros²</option>
                                {this.state.sup_list.map(s=>
                                        <option>{[s]}</option>
                                        )}</Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col className='preguntas'>
                            ¿Cuantas habitaciones necesitas?
                            </Col> 
                            <Col>
                                <Form.Control as='select' type="number" className='formulario' placeholder="rooms" value={this.state.rooms} onChange={(event)=>this.setState({rooms: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})}>
                                <option disabled selected value=''>Habitaciones</option>
                                {this.state.room_list.map(r=>
                                        <option>{[r]}</option>
                                        )}</Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col className='preguntas'>
                                ¿Cuantos baños necesitas?
                            </Col> 
                            <Col >
                                <Form.Control as='select' type="number" className='formulario' placeholder="baths" value={this.state.baths} onChange={(event)=>this.setState({baths: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})}>
                                <option disabled selected value=''>Baños</option>
                                    {this.state.bath_list.map(b=>
                                        <option>{[b]}</option>
                                        )}</Form.Control>
                            </Col>
                        </Form.Group>

                        <Button className='button' onClick={this.handleOnClickSubmit}>Calcular</Button>
                    </Form>
                </div>
                <div className='linia2'/>
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