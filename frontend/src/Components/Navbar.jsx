import { Box, Button, Flex, HStack, IconButton, Show, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../Redux/Auth/action';

const Navbar = () => {
    const bg = useColorModeValue('white', 'black')
    const color = useColorModeValue('black', 'white')
    const { colorMode, toggleColorMode } = useColorMode();
    const token = useSelector((store) => store.AuthReducer.token);
    const dispatch = useDispatch();
    useEffect(() => {

    }, [token])
    return (
        <HStack width={"100%"} padding="15px" gap={"100px"} backgroundColor={color} color={bg} justifyContent={"center"} alignItems={"center"} fontWeight={600}>
            <Link to={"/"}>Add Order</Link>
            <Link to={"/orders"}>All Orders</Link>
            {token ?
                <Button onClick={() => dispatch(logout())}>Logout</Button>
                :
                <Link to={"/login"}>Login</Link>
            }
            {token ?
                ""
                :
                <Link to={"/signup"}>Sign Up</Link>
            }
            <span>{bg === 'white' ? <IconButton borderRadius={"50%"} bg={color} colorScheme={bg === 'white' ? "#10264f" : 'white'} onClick={toggleColorMode} icon={<FaMoon />} /> : <IconButton bg={color} colorScheme={bg === 'white' ? "#10264f" : 'white'} onClick={toggleColorMode} borderRadius={"50%"} icon={<FaSun />} />}</span>
        </HStack >
    )
}
export default Navbar;