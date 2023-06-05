import React from 'react';
import { Link, Box, Flex, Circle } from '@chakra-ui/react';
import Modals from './Modals';



function Navbar(props) {
    return (
        <Flex align="center" bg='#26a287' h="20" margin="auto" borderRadius="xl" pos="relative" shadow="xl">
            <Box>
                <Link m="4" color="white" fontSize="2xl">U-Todo</Link>
            </Box>
            <Circle pos="absolute" right="-5" bg="gray.300" size="40px" >
                <Modals data={props.data} setData={props.setData} />
            </Circle>
        </Flex>

    );
}

export default Navbar;