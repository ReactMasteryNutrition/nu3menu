import {Center, Flex, FormControl, Heading, Input} from "@chakra-ui/react";
import React from "react";
import {ResponsiveWidth} from "../../utils/helper";
import ModalEmail from "../myAccount/Modal/UpdateEmail";

const FormContact = () => {
    return (
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

            </Flex>


            <form>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prénom" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Objet" />
                <textarea placeholder="Message" />
                <button type="submit">Envoyer</button>
            </form>
        </Flex>
    )
}

export default FormContact