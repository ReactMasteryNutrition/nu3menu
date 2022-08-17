import ModalName from './Modal/UpdateName'
import ModalEmail from './Modal/UpdateEmail'
import ModalPassword from './Modal/UpdatePassword'
import { ResponsiveWidth } from "../../utils/helper"
import { useAuth } from '../../context/authContext'
import {
    Flex,
    Avatar,
    FormControl,
    Input,
    InputGroup,
    Box
} from '@chakra-ui/react'
import DeleteAccount from './Modal/DeleteAccount'

const FormDataUser = () => {
    const { currentUser } = useAuth()
    const InputName = () => {
        if (currentUser?.providerData[0]?.providerId !== 'google.com') {
            return (
            <FormControl marginBottom="1rem">
                <Flex
                    gap="1rem"
                    flexDirection={ResponsiveWidth() ? "row" : "column"}
                >
                    <Input
                        placeholder={currentUser?.displayName ? currentUser?.displayName : "Mon prénom"}
                        bg='#f0fff4'
                        readOnly />
                    <ModalName />
                </Flex>
            </FormControl>)
        }
    }
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
            margin="5rem 0 8rem 0"
        >
            <Box>
                <Avatar size="2xl" />
            </Box>
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={ResponsiveWidth() ? null : "80%"}
            >
                <InputName />
                <FormControl marginBottom="1rem">
                    <Flex
                        gap="1rem"
                        flexDirection={ResponsiveWidth() ? "row" : "column"}
                    >
                        <Input type='email' placeholder={currentUser?.email} bg='#f0fff4' readOnly />
                        <ModalEmail />
                    </Flex>
                </FormControl >
                <Flex
                    gap={ResponsiveWidth() ? "1rem" : 0}
                    flexDirection={ResponsiveWidth() ? "row" : "column"}
                    width="100%"
                >
                    <InputGroup size='md' marginBottom="1rem" >
                        <Input
                            placeholder='&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;'
                            bg='#f0fff4'
                            readOnly
                        />
                    </InputGroup>
                    <ModalPassword />
                </Flex>
                <FormControl marginBottom="1rem">
                    <DeleteAccount />
                </FormControl>
            </Flex>
        </Flex>
    )
}

export default FormDataUser