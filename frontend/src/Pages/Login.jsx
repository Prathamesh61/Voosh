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
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/Auth/action';

const initial = {
    phone_number: "",
    password: ""
}
const SignIn = () => {
    const [user, setUser] = useState(initial);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = (payload) => {
        console.log("working");
        dispatch(loginUser(payload)).then((r) => {
            alert("Login Successfull");
            navigate('/');
        })
    };

    useEffect(() => {
    }, []);

    // handleSignIn(user);
    const handle = (e) => {
        const { name: key, value } = e.target
        setUser({ ...user, [key]: value })
        // handleSignIn(user);
    }
    console.log(user)


    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="phone">
                            <FormLabel>Phone Number</FormLabel>
                            <Input onChange={handle} placeholder={"Enter Phone Number"} value={user.phone_number} name='phone_number' type="tel" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handle} placeholder={"Enter Password"} value={user.password} name='password' type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500', }} onClick={() => handleSignIn(user)}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default SignIn