import { Box, Button, Flex, Stack,Text} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'

const SideBar = () => {
    const {isAuth}=useSelector((store)=>store.auth)
    console.log(isAuth)
  return (
    <Box border="1px solid black" height="100vh" width="250px">
        <Stack direction="column">
            <Box height="15vh" border="1px solid black"></Box>
            <Box height="70vh" border="1px solid blue">
                <Flex direction="column">
                    <Box border="1px solid blue">
                        <Flex padding="0px 20px">
                            <Text>All</Text>
                            <Text margin="auto">4</Text>
                            
                        </Flex>
                    </Box>
                    <Box border="1px solid blue">
                        <Flex padding="0px 20px">
                            <Text>All</Text>
                            <Text margin="auto">4</Text>
                            
                        </Flex>
                    </Box>
                    <Box border="1px solid blue">
                        <Flex padding="0px 20px">
                            <Text>All</Text>
                            <Text margin="auto">4</Text>
                            
                        </Flex>
                    </Box>
                    <Box border="1px solid blue">
                        <Flex padding="0px 20px">
                            <Text>All</Text>
                            <Text margin="auto">4</Text>
                            
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box height="10vh" border="1px solid black">
                <Button width="100%">LogOut</Button>
            </Box>

        </Stack>
    </Box>
  )
}

export default SideBar