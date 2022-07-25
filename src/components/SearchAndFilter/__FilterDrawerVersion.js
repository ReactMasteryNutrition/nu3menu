// Import 
import React from 'react'
import { Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tooltip, useDisclosure } from '@chakra-ui/react'
import { IoFunnelOutline } from 'react-icons/io5'
// Function

export function FilterDrawerVersion() {

    return(
                <DrawerContent bgColor='gray.400'>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Center>
                            Filtre
                            <Tooltip label='Réinitialiser'>
                                <IconButton
                                    _hover={{ bg: '#1A202C'}}
                                    _active={{ bg: '#1A202C'}}
                                    bgColor='gray.800'
                                    color='gray.400'
                                    icon={<IoFunnelOutline/>}
                                    marginLeft='1em'
                                />
                            </Tooltip>
                        </Center>
                    </DrawerHeader>
                    <DrawerBody>
                        <FormControl>
                            <FormLabel>
                                Calories (Kcal/personnes)
                            </FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <InputGroup >
                                <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <FormLabel marginTop='0.5em'>
                                Glucides (gramme)
                            </FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <InputGroup >
                                <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <FormLabel marginTop='0.5em'>
                                Lipides (gramme)
                            </FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <InputGroup >
                                <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <FormLabel marginTop='0.5em'>
                                Protéines (gramme)
                            </FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                            <InputGroup >
                                <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='gray.400' w='4em'/>
                                <NumberInput borderColor='gray.800' w='100%'>
                                    <NumberInputField borderLeftRadius='0'/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor='gray.800'/>
                                        <NumberDecrementStepper borderColor='gray.800'/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                        </FormControl>
                    </DrawerBody>
                    <DrawerFooter>
                        <Center w='100%'>
                            <Button marginTop='0.5em' bgColor='gray.800' color='gray.400' _hover={{ bg: '#1A202C'}} _active={{ bg: '#1A202C'}}>
                                Appliquer
                            </Button> 
                        </Center>
                    </DrawerFooter>
                </DrawerContent>

    )
}