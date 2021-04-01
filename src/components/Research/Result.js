import React, {Component} from "react";

class Result extends Component{
    componentDidMount(){
        this.props.fetchPrice()
    }
    render(){
        return(
            <div>
                {this.props.price}
            </div>
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
        fetchPrice:()=>dispatch(fetchPrice())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Result)
