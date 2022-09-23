import {Center, Flex, FormControl, FormLabel, Heading, Input, Textarea} from "@chakra-ui/react";
import React from "react";
import {ResponsiveWidth} from "../../utils/helper";

const FormContact = () => {
    return (
        <>
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="3rem"
                margin="5rem 0 8rem 0"
            >
                <Center mb='2rem'>
                    <Heading as='h1' size='xl' color={"green.50"} >Nous contacter</Heading>
                </Center>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width={ResponsiveWidth() ? null : "80%"}
                >
                    <FormControl id="email" isRequired spacing={2}>
                        <FormLabel color={"green.50"}>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Email"
                            variant="filled"
                            bg={"none"}
                            borderColor='#48bb78'
                            color='green.50'
                            _hover={{borderColor: "green.50"}}

                        />
                    </FormControl>
                    <FormControl id="message" spacing={3} isRequired>
                        <FormLabel color={"green.50"}>Message</FormLabel>
                        <Textarea
                            variant="filled"
                            colorScheme='green'
                            color={"green.50"}
                            mt="1rem"
                        />
                    </FormControl>
                </Flex>


                {/*<form>
                    <input type="text" placeholder="Nom" />
                    <input type="text" placeholder="Prénom" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Objet" />
                    <textarea placeholder="Message" />
                    <button type="submit">Envoyer</button>
                </form> */}
            </Flex>
        </>
    )
}

export default FormContact