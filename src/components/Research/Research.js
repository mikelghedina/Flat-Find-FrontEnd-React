import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import {fetchPrice, postPrice} from "../../store/actions/PriceActionTypes/priceActions";
import {connect} from "react-redux";



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

        this.props.postPrice(this.state.district_name, parseInt(this.state.sup), parseInt(this.state.baths), parseInt(this.state.rooms))
        console.log(this.state)

    }

    render() {

        return(
            <React.Fragment>
                <Form>
                    <Form.Control type='text' placeholder="district" value={this.state.district_name} onChange={(event)=>this.setState({district_name:event.target.value})}/>
                    <Form.Control type="number" placeholder="baths" value={this.state.baths} onChange={(event)=>this.setState({baths:event.target.value})} />
                    <Form.Control type="number" placeholder="sup" value={this.state.sup} onChange={(event)=>this.setState({sup:event.target.value})} />
                    <Form.Control type="number" placeholder="rooms" value={this.state.rooms} onChange={(event)=>this.setState({rooms:event.target.value})} />
                </Form>
                <Button onClick={this.handleOnClickSubmit}>Submit</Button>

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