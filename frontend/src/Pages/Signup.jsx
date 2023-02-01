import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser } from '../Redux/Auth/action';

const Initial = {
    name: "",
    phone_number: "",
    password: ""
}
const SignUp = () => {
    const [user, setUser] = useState(Initial);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = (payload) => {
        console.log("working")
        dispatch(signupUser(payload)).then((r) => {
            alert("Signup Successfull");
            navigate('/login');
        })
    };
    useEffect(() => {

    }, [])

    const handle = (e) => {
        const { name: key, value } = e.target
        setUser({ ...user, [key]: value });
    }
    console.log(user);
    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign Up to your account</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="Full Name">
                            <FormLabel> Name</FormLabel>
                            <Input onChange={handle} placeholder={"Enter Name"} value={user.name} name='name' type="text" />
                        </FormControl>
                        <FormControl id="phone">
                            <FormLabel>Phone Number</FormLabel>
                            <Input onChange={handle} placeholder={"Enter Phone Number"} value={user.phone_number} name='phone_number' type='tel' />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handle} placeholder={"Enter password"} value={user.password} name='password' type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500', }} onClick={() => handleSignUp(user)}>
                                Sign Up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default SignUp
