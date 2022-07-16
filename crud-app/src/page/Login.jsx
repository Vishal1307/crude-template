import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
  // import {} from "react-router-dom"
  import { Link as RouterLink} from "react-router-dom"
import { register ,LoginData} from '../Redux/Auth/action';
  const initState={
    email:"",
    password:""
  }
  function reducer(store,{type,payload}) {
    switch(type) {
      case "email":
        return {...store,email: payload}
      case "password":
        return {...store,password: payload}


    }
  }
  
  export default function Login() {
    const [store,dispatch]=useReducer(reducer,initState)
    const dispatchs =useDispatch()

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={store.email} onChange={(e)=>{
                  dispatch({type:"email",payload:e.target.value})

                }}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={store.password} onChange={(e)=>{dispatch({type:"password",payload:e.target.value})}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500', 
                  }} onClick={()=>dispatchs(LoginData(store))}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                  don't have account? <RouterLink to="/signup" color={'blue.400'}>SignUp</RouterLink>
                </Text>
              </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }