import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, {useRef, useState} from "react";
import { ResponsiveWidth } from "../../utils/helper";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';

const FormContact = () => {

  const data = {
   name: "",
   firstname: "",
   email: "",
   subject: "",
   message: "",
 };

  const [initialData, setInitialData] = useState(data);

  const form = useRef();

  const REQUIRED_VALIDATION = (label) => {
    return `${label} is Required!`;
  };

  const schema = yup.object().shape({
    name: yup.string().required(REQUIRED_VALIDATION("Name")),
    firstname: yup.string().required(REQUIRED_VALIDATION("Firstname")),
    email: yup.string().email().required(REQUIRED_VALIDATION("Email")),
    subject: yup.string().required(REQUIRED_VALIDATION("Subject")),
    message: yup.string().required(REQUIRED_VALIDATION("Message")),

  }).required();

  const { register, handleSubmit, reset, formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
        const templateId = 'template_nfwtzhd';
        const serviceId = 'service_ka9b4ti';
        const userId = 'f0mHaeHctIULC2KCb';
        sendFeedback(serviceId, templateId, {
            to_name: "Nu3Menu",
            name: data.name,
            firstname: data.firstname,
            email: data.email,
            subject: data.subject,
            message: data.message,
        }, userId);
  }


  const sendFeedback = (serviceId, templateId, variables, userId) => {
        emailjs
            .send(serviceId, templateId, variables, userId)
            .then((res) => {
                reset();
            })
  };

  const onError = (error) => {
      throw error;
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
            <form ref={form} onSubmit={handleSubmit(onSubmit, onError)}>
              <FormControl display="flex" flexDir="column" gap="4">
                <HStack spacing="6">
                  <Box w="100%">
                    <FormControl height={"6rem"} id="first-name" isRequired>
                      <FormLabel htmlFor="first-name" color={"green.50"}>First-name</FormLabel>
                      <Input
                        type="text"
                        id="firstname"
                        name="firstname"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                        {...register
                            ("firstname")
                        }
                      />
                        {errors && errors.firstname && (
                            <FormHelperText color="red">
                                {errors.firstname.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                  </Box>
                  <Box w="100%">
                        <FormControl id="name" height={"6rem"}  isRequired>
                            <FormLabel htmlFor="name" color={"green.50"}>Last-name</FormLabel>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                color={"green.50"}
                                borderColor="#48bb78"
                                _focusVisible={{ borderColor: "green.50" }}
                                {...register("name")}
                            />
                            {errors && errors.name && (
                                <FormHelperText color="red">
                                    {errors.name.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4">
                  <Box w="100%">
                    <FormControl id="email" isRequired>
                      <FormLabel htmlFor="email" color={"green.50"}>Email</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                        {...register
                          ("email")
                        }
                      />
                        {errors && errors.email && (
                            <FormHelperText color="red">
                                {errors.email.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4">
                  <Box w="100%">
                    <FormControl id="subject" isRequired>
                      <FormLabel color={"green.50"}>Subject</FormLabel>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        color={"green.50"}
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                        {...register
                            ("subject")
                        }
                      />
                        {errors && errors.subject && (
                            <FormHelperText color="red">
                                {errors.subject.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing="4">
                  <Box w="100%">
                    <FormControl id="message" isRequired>
                      <FormLabel htmlFor="message"color={"green.50"}>Message</FormLabel>
                      <Textarea
                        color={"green.50"}
                        id="message"
                        name="message"
                        borderColor="#48bb78"
                        _focusVisible={{ borderColor: "green.50" }}
                        {...register("message")}
                      />
                        {errors && errors.message && (
                            <FormHelperText color="red">
                                {errors.message.message}
                            </FormHelperText>
                        )}
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
                    Submit
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
