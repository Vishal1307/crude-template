import { getLocalData, saveLocalData } from "../../Utlies/localStorage"
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCESS, SIGN_ERROR, SIGN_REQUEST, SIGN_SUCESS } from "./actionType"

const init={
    isAuth:getLocalData("token")?true:false,
    loadings:false,
    error:false,
    token:getLocalData("token")||"",
}
export const AuthReducer=(store=init,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...store,loadings:true}
        case LOGIN_SUCESS:
            saveLocalData("token",payload)
            return {...store,loadings:false,token:payload,error:false,isAuth:true}
        case LOGIN_ERROR:
            return {...store,loadings:false,error:true,auth:false}
        case SIGN_REQUEST:
            return {...store,loadings:true}
        case SIGN_SUCESS:
            return {...store,loadings:false,token:payload}
        case SIGN_ERROR:
            return{...store,error:true}
            
         default:
            return {...store}
        
        

        
    }



}