import {ModalName, ModalEmail, ModalPassword} from './Modal'
import Alert from './Alert'
import { ResponsiveWidth } from "../../utils/helper"
import * as React from 'react'
import {
    Flex,
    Avatar,
    FormControl,
    Input,
    InputGroup,
    Button,
    Box
} from '@chakra-ui/react'

const Form = () => {

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
                <FormControl marginBottom="1rem">
                    <Flex
                        gap="1rem"
                        flexDirection={ResponsiveWidth() ? "row" : "column"}
                    >
                        <Input placeholder='John' bg='#f0fff4' readOnly />
                        <ModalName />
                    </Flex>
                </FormControl>
                <FormControl marginBottom="1rem">
                    <Flex
                        gap="1rem"
                        flexDirection={ResponsiveWidth() ? "row" : "column"}
                    >
                        <Input type='email' placeholder='johndoe@gmail.com' bg='#f0fff4' readOnly />
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
                    <Button
                        padding={ResponsiveWidth() ? "0.5rem 5.1rem" : "0.5rem"}
                        marginTop={ResponsiveWidth() ? null : "3rem"}
                        width="100%"
                        bg='#48bb78'
                        color="#f0fff4"
                        _hover={{ bgColor: "#a0aec0" }}
                    >
                        Valider mes modifications
                    </Button>
                </FormControl>
                <FormControl marginBottom="1rem">
                    <Alert/>
                </FormControl>
            </Flex>
        </Flex>
    )
}

export default Form