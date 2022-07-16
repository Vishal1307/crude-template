import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useReducer, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  const initState={
    name:"",
    username: "",
    email:"",
    password:"",
    mobile:"",
    description:"",
    

  }
  function reducer(store,{type,payload}){
    switch(type){
      case "name":
        return {...store,name: payload}
      case "username":
        return {...store,username: payload}
        case "email":
          return {...store,email: payload}
        case "password":
          return {...store,password: payload}
        case "mobile":
          return {...store,mobile: payload}
        case "description":
          return {...store,description: payload}
        default:
          return{...store}
    }

  }
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [store,dispatch] = useReducer(reducer,initState);
    console.log(store)
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={store.name} onChange={(e)=>dispatch({type: 'name',payload:e.target.value })} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username">
                    <FormLabel>User Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Phone</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>description</FormLabel>
                <Input type="text-area" />
              </FormControl>
              
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <RouterLink to="/login" color={'blue.400'}>Login</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }