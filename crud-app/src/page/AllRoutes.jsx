import { Stack } from "@chakra-ui/react"
import { Routes ,Route} from "react-router-dom"
import { ReqAuth } from "../component/reqAuth"
import SideBar from "../component/SideBar"
import { Home } from "./Home"
import Login from "./Login"
import Signup from "./SignUp"

export const AllROute=()=>{
    return (<Routes>
        <Route path="/" element={<Stack direction="row"><SideBar/>,<Home/></Stack>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
    </Routes>)
}