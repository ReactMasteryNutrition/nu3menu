import {Box, useDisclosure} from "@chakra-ui/react";
import React from 'react';
import {ModalForgetPassword} from "../components/forgetPwd/Modal";

const ForgetPassword = () => {
    const { onClose, onOpen, isOpen } = useDisclosure()
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <ModalForgetPassword onClick={onOpen} />
        </Box>

    );
}

export default ForgetPassword;