import {
    FETCH_PRICE_FAILURE,
    FETCH_PRICE_SUCCESS,
    FETCH_PRICE_REQUEST,
    POST_PRICE_REQUEST,
    POST_PRICE_FAILURE
} from "./priceTypes";

import axios from 'axios'

export const postPrice = state =>{
    return(dispatch)=>{
        dispatch(postPriceRequest())
        axios.get('http://localhost:5000/est/',{params:{
                district_name: state.district_name,
                sup: state.sup,
                baths: state.baths,
                rooms: state.rooms,
            }})
            .then(response => {
                console.log(response)
                dispatch(fetchPrice())
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(postPriceFailure(errorMessage))
            })
    }
}

export const fetchPrice =() =>{
    return(dispatch)=>{
        dispatch(fetchPriceRequest())
        axios.get('http://localhost:5000/est/result')
            .then(response => {
                dispatch(fetchPriceSuccess(response.data))
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(fetchPriceFailure(errorMessage))
            })
    }
}

export const fetchPriceRequest = () => {
    return {
        type: FETCH_PRICE_REQUEST
    }
}

export const fetchPriceSuccess = priceData => {
    return {
        type: FETCH_PRICE_SUCCESS,
        payload: priceData
    }
}

export const fetchPriceFailure = error => {
    return {
        type: FETCH_PRICE_FAILURE,
        payload: error
    }
}

export const postPriceRequest = () => {
    return {
        type: POST_PRICE_REQUEST
    }
}


export const postPriceFailure = error => {
    return {
        type: POST_PRICE_FAILURE,
        payload: error
    }
}