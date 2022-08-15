import {Box, useDisclosure} from "@chakra-ui/react";
import React from 'react';


const ForgetPassword = () => {
    const { onClose, onOpen, isOpen } = useDisclosure()
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'/>
    );
}

export {ForgetPassword};