import React, {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";
import {fetchPrice, postPrice} from "../../store/actions/PriceActionTypes/priceActions";
import {connect} from "react-redux";
import './Research.css';


class Research extends Component {


    state={
        district_name:'',
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
                <Form className='form' onSubmit={this.handleOnClickSubmit}>
                    <Form.Group>
                        <Col>
                            <Form.Control type='text' className='formulario' placeholder="district" value={this.state.district_name} onChange={(event)=>this.setState({district_name:event.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Col>
                            <Form.Control type="number" className='formulario' placeholder="baths" value={this.state.baths} onChange={(event)=>this.setState({baths: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Col>
                            <Form.Control type="number" className='formulario' placeholder="sup" value={this.state.sup} onChange={(event)=>this.setState({sup: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Col>
                            <Form.Control type="number" className='formulario' placeholder="rooms" value={this.state.rooms} onChange={(event)=>this.setState({rooms: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value})} />
                        </Col>
                    </Form.Group>
                    <Button onClick={this.handleOnClickSubmit}>Submit</Button>
                </Form>

                <p>{this.props.price.price}</p>
                <p>{console.log(this.state)}</p>

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
        postPrice:(district_name, sup, baths, rooms)=>dispatch(postPrice(district_name, sup, baths, rooms)),
        fetchPrice:()=>dispatch(fetchPrice())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Research)