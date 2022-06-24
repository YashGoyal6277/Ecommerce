import {
    ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,CLEAR_ERROR,PRODUCTS_DETAILS_REQUEST,PRODUCTS_DETAILS_FAIL,PRODUCTS_DETAILS_SUCCESS} from '../constants/productConstants'
export const productsReducer = (state={products:[]},action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading:true,
                products:[]
            }
            case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products:action.payload.products,
                productsCount:action.payload.productsCount,
                resPerPage:action.payload.resperpage
            }
            case ALL_PRODUCTS_FAIL:
                return {
                    loading:false,
                    error:action.payload
                } 
                case CLEAR_ERROR:{
                    return{
                        ...state,error:null
                    }
                }
            
        default: 
        return state;
    }
}

export const productDetailsReducer=(state={product:{}}, action) =>{
    switch(action.type){
        case PRODUCTS_DETAILS_REQUEST :
        return{
            ...state,
            loading:true
        }
        case PRODUCTS_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
            case PRODUCTS_DETAILS_FAIL:
            return{
                ...state,
                error:action.payload
            }
            case CLEAR_ERROR:{
                return{
                    ...state,error:null
                }
            }
            default: return state
    }
}