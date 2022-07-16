import { Box, Flex,Text } from "@chakra-ui/react"
import { useCallback, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import GetTask from "../component/GetTask"
import { GetData } from "../Redux/App/action"
import { store } from "../Redux/store"

export const Home=()=>{
    
    const dispatch=useDispatch()
    const {tasks,loading}=useSelector((store)=>store.apps)
    useEffect(()=>{
        if(tasks.length==0){
            dispatch(GetData())
        }
    },[dispatch,tasks.length])
   
  
    
   
    return (
        <Box width="100%">
            <Flex justifyContent={"space-around"}>
                <Box border="1px solid blue" height="95vh" width="250px">
                    <Box>
                        <Text as="h1" textAlign="center">Todo</Text>
                        {tasks.filter((ts)=>ts.task_status=="todo").map((cv)=><GetTask key={cv.id} {...cv}/>)}
                    </Box>
                </Box>
                <Box border="1px solid blue" height="95vh" width="250px">
                    <Box>
                        <Text as="h1" textAlign="center">In-progress</Text>
                        {tasks.filter((ts)=>ts.task_status=="in-progress").map((cv)=><GetTask key={cv.id} {...cv}/>)}

                    </Box>
                </Box>
                <Box border="1px solid blue" height="95vh" width="250px">
                    <Box>
                        <Text as="h1" textAlign="center">Done</Text>
                        {tasks.filter((ts)=>ts.task_status=="done").map((cv)=><GetTask key={cv.id} {...cv}/>)}

                    </Box>
                </Box>
            </Flex>
        </Box>
       
    )
}