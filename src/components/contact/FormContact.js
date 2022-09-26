import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { ResponsiveWidth } from "../../utils/helper";
import {useForm} from "react-hook-form";

const FormContact = () => {
  const { handleSubmit} = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }


  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="3rem"
        margin="5rem 0 8rem 0"
      >
        <Center mb="2rem">
          <Heading as="h1" size="xl" color={"green.50"}>
            Contact us
          </Heading>
        </Center>
        <Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={ResponsiveWidth() ? null : "80%"}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl display="flex" flexDir="column" gap="4">
                <HStack spacing="6">
                  <Box w="100%">
                    <FormControl id="first-name" isRequired>
                      <FormLabel color={"green.50"}>First-name</FormLabel>
                      <Input
                        type="text"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                      />
                    </FormControl>
                  </Box>
                  <Box w="100%">
                    <FormControl id="last-name" isRequired>
                      <FormLabel color={"green.50"}>Last-name</FormLabel>
                      <Input
                        type="text"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4">
                  <Box w="100%">
                    <FormControl id="email" isRequired>
                      <FormLabel color={"green.50"}>Email</FormLabel>
                      <Input
                        type="email"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4">
                  <Box w="100%">
                    <FormControl id="object" isRequired>
                      <FormLabel color={"green.50"}>Object</FormLabel>
                      <Input
                        type="text"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4">
                  <Box w="100%">
                    <FormControl id="message" isRequired>
                      <FormLabel color={"green.50"}>Message</FormLabel>
                      <Textarea
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4" justify="center">
                  <Button
                    colorScheme="green"
                    variant="solid"
                    width="10rem"
                    type="submit"
                    bg="#48bb78"
                    color={"green.50"}
                    fontWeight="bold"
                    fontSize="lg"
                    mt={4}
                    _hover={{ bg: "#9faec0" }}
                  >
                    Send
                  </Button>
                </HStack>
              </FormControl>
            </form>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};

export default FormContact;
