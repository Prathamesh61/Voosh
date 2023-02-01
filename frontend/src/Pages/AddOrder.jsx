import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { postOrder } from '../Redux/App/action';

const Initial = {
    sub_total: "",
    phone_number: ""
}
const AddOrder = () => {
    const [order, setOrder] = useState(Initial);
    const user = useSelector((state) => state.AuthReducer.user) || {};
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOrder = (payload) => {
        dispatch(postOrder(payload)).then((r) => {
            alert("Order Added Successfull");
            navigate('/orders');
        })
    };

    const handle = (e) => {
        const { name: key, value } = e.target
        setOrder({ ...order, [key]: value });
    }
    // console.log(order);
    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add Order to your account</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="sub_total">
                            <FormLabel>Sub Total</FormLabel>
                            <Input onChange={handle} placeholder={"Enter Sub_total"} value={order.sub_total} name='sub_total' type="text" />
                        </FormControl>
                        <FormControl id="phone">
                            <FormLabel>Phone Number</FormLabel>
                            <Input onChange={handle} placeholder={"Enter Phone Number"} value={user.phone_number} name='phone_number' type='tel' />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500', }} onClick={() => handleOrder(order)}>
                                Add Order
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default AddOrder
