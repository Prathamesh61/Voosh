import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box, Text, Stack, Heading, Spinner, Center
} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../Redux/App/action';

const AllOrders = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.AuthReducer.user);
    const orders = useSelector((state) => state.AppReducer.orders);
    const isAuth = useSelector((state) => state.AuthReducer.isAuth);
    const isLoading = useSelector((store) => store.AppReducer.isLoading);
    console.log(orders);
    useEffect(() => {
        dispatch(getOrder(user?._id));
    }, [user])

    return (
        <Box py={'100px'}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>My Orders</Heading>
            </Stack>
            <TableContainer py={'30px'} width={['80%']} margin={"auto"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Phone Number</Th>
                            <Th>Sub Total</Th>
                            <Th>Placed At</Th>
                        </Tr>
                    </Thead>
                    {isLoading ?
                        <Spinner
                            margin={'auto'}
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                        :
                        <Tbody>
                            {orders?.map((el) => {
                                return (<Tr>
                                    <Td>{el.phone_number}</Td>
                                    <Td>{el.sub_total}</Td>
                                    <Td>{new Date(`${el.createdAt}`).toLocaleString()}</Td>
                                </Tr>)
                            })
                            }
                        </Tbody>
                    }
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AllOrders