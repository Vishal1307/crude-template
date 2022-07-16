import {useSelector} from "react-redux"
import {Navigate, useLocation}  from "react-router-dom"
import {store} from "../Redux/store"
export const ReqAuth=({children})=>{

    const {isAuth}=useSelector((store)=store.auth)
    let location=useLocation()
    if(!isAuth){
        return <Navigate to="/login" state={{from: location}}/>
    }
    return children

}