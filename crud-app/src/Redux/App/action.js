import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCESS } from "./actionType";
import axios from "axios";

export const getDataRequest=(payload)=>({
    type:GET_DATA_REQUEST,
    payload
})
export const getDataSucess=(payload)=>({
    type:GET_DATA_SUCESS,
    payload

})
export const getDataFailure=(payload)=>({
    type:GET_DATA_FAILURE,
    payload
})
export const GetData=()=>{
    return (dispatch)=>{
        dispatch(getDataRequest())
        fetch("http://localhost:3002/Tasks").then((d)=>d.json()).then((data)=>dispatch(getDataSucess(data))).catch((err)=>dispatch(getDataFailure()))

    }
}