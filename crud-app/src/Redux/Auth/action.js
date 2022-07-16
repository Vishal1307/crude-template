import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCESS, SIGN_ERROR, SIGN_REQUEST, SIGN_SUCESS } from "./actionType";
import axios from "axios";

export const loginREquest=(payload)=>({
    type:LOGIN_REQUEST,
    payload

})
export const loginSucess=(payload)=>({
    type:LOGIN_SUCESS,
    payload

})
export const loginError=(payload)=>({
    type:LOGIN_ERROR,
    payload

})
export const signREquest=(payload)=>({
    type:SIGN_REQUEST,
    payload

})
export const signSucess=(payload)=>({
    type:SIGN_SUCESS,
    payload

})
export const signError=(payload)=>({
    type:SIGN_ERROR,
    payload

})
export const register=(payload)=>{
    return (dispatch)=>{
        dispatch(signREquest())
        axios.post("https://masai-api-mocker.herokuapp/auth/register",payload).then((res)=>dispatch(signSucess(res.data))).catch((err)=>dispatch(signError(err)))
        


    }
}
export const LoginData=(payload)=>{
    return (dispatch)=>{
        dispatch(loginREquest())
        axios.post("https://masai-api-mocker.herokuapp/auth/login",payload).then((res)=>dispatch(loginSucess(res.data))).catch((err)=>dispatch(loginError(err)))

    }
}