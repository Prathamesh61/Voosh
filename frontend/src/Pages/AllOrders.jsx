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
    Box, Text, Stack, Heading
} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../Redux/App/action';

const AllOrders = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.AuthReducer.user) || {};
    const orders = useSelector((state) => state.AppReducer.orders) || [];
    const isAuth = useSelector((state) => state.AuthReducer.isAuth);
    // console.log(orders);
    useEffect(() => {
        dispatch(getOrder(user?._id));
    }, [])
    // console.log(user)
    // if (!isAuth) {
    //     return (
    //         <Box>
    //             <Stack align={'center'}>
    //                 <Heading fontSize={'4xl'}>Login Again</Heading>
    //             </Stack>
    //         </Box>
    //     )
    // }
    return (
        <Box>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>My Orders</Heading>
            </Stack>
            <TableContainer py={'100px'} width={['80%']} margin={"auto"}>
                <Table variant='simple'>
                    <TableCaption>All Orders</TableCaption>
                    <Thead>
                        <Tr>
                            {/* <Th>Name</Th> */}
                            <Th>Phone Number</Th>
                            <Th>Sub Total</Th>
                            <Th>Placed At</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders?.map((el) => {
                            return (<Tr>
                                {/* <Td>{el.name}</Td> */}
                                <Td>{el.phone_number}</Td>
                                <Td>{el.sub_total}</Td>
                                <Td>{new Date(`${el.createdAt}`).toLocaleString()}</Td>
                            </Tr>)
                        })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AllOrders