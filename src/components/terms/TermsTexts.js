import {Box, Center, Divider, Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";

const TermsTexts = () => {
    return (
        <>
            <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                gap="3rem"
                margin="5rem 0 8rem 0"
            >
                <Center>
                    <Heading as="h1" size="xl" color={"green.50"}>Terms and conditions</Heading>
                </Center>
                <Divider variant="solid" width={8} border={4} />
                <Center>
                    <Heading as={"h2"} size={"md"} color={"green.50"}>Last updated : 2022-09-25</Heading>
                </Center>
                <Box
                    display="flex"
                    flexDirection="column"
                    width="{100%}"
                    px={8}
                >

                </Box>
            </Flex>
        </>
    )
}

export default TermsTexts