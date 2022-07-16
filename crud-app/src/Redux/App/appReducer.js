import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCESS } from "./actionType"

const init={
    loading:false,
    tasks:[],
    error:false
}
export const AppReducer=(store=init,{type,payload})=>{
    switch(type){
        case GET_DATA_REQUEST:
            return {...store,loading:true}
        case GET_DATA_SUCESS:
            return {...store,loading:false,tasks:payload}
        case GET_DATA_FAILURE:
            return {...store,error:true}
        default:
            return {...store}
    }
}