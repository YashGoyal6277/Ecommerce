import axios from 'axios'
import {ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,CLEAR_ERROR,PRODUCTS_DETAILS_REQUEST,PRODUCTS_DETAILS_FAIL,PRODUCTS_DETAILS_SUCCESS} from '../constants/productConstants'

export const getProducts=(keyword='',currentPage=1,price)=>async(dispatch) =>{
        try{
                dispatch({
                    type:ALL_PRODUCTS_REQUEST
                })
                let link=`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`
                const {data} = await axios.get(link);
             
                dispatch({
                    type:ALL_PRODUCTS_SUCCESS,
                    payload:data
                })
        }
        catch(error){
        
            dispatch({
                type:ALL_PRODUCTS_FAIL,
                payload:error.response.data.message
            })
        }
}

export const getProductDetails=(id)=>async(dispatch) =>{
    try{
            dispatch({
                type:PRODUCTS_DETAILS_REQUEST
            })
            const {data} = await axios.get(`/api/v1/product/${id}`);
            dispatch({
                type:PRODUCTS_DETAILS_SUCCESS,
                payload:data.product
            })
    }
    catch(error){
      
        dispatch({
            type:PRODUCTS_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}

//clear errors

export const clearErrors=() =>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    })
}
