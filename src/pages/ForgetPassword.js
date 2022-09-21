import {Box} from "@chakra-ui/react";
import { FormForgetPassword } from "../components/forgetPwd/Form";

const ForgetPassword = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <FormForgetPassword/>
        </Box>
    );
}

export default ForgetPassword;