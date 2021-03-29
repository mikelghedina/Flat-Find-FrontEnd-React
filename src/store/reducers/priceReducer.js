import {
    FETCH_PRICE_REQUEST,
    FETCH_PRICE_SUCCESS,
    FETCH_PRICE_FAILURE,
    POST_PRICE_FAILURE,
    POST_PRICE_REQUEST
} from "../actions/PriceActionTypes/priceTypes";

const initialState = {
    loading: false,
    priceData:[],
    error:''
}

const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRICE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRICE_SUCCESS:
            return {
                loading: false,
                priceData: action.payload,
                error: ''
            }
        case FETCH_PRICE_FAILURE:
            return {
                loading: false,
                priceData: [],
                error: action.payload
            }
        case POST_PRICE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_PRICE_FAILURE:
            return {
                loading: false,
                priceData: [],
                error: action.payload
            }

        default: return state
    }
}

export default priceReducer;