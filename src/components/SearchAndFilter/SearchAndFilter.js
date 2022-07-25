// Imports
import React from 'react'
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, Input, InputGroup, InputLeftElement, Tooltip, useDisclosure } from '@chakra-ui/react'
import { IoFunnel, IoSearch } from 'react-icons/io5'
import { Filter } from './Filter'
// Functions

export function SearchAndFilter(){
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <>
            <Flex justify={['center', 'center', 'right']}>
                <Flex w={['100%', '75%', '50%', '33%']} paddingX='1em' marginTop='1em'>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            borderColor='green.50'
                            color='green.400'
                            children={<IoSearch />}
                        />
                        <Input type='search' placeholder='Recette' color='green.50' focusBorderColor='green.400'/>
                    </InputGroup>
                    <Tooltip label='Filtrer'>
                        <IconButton
                            ref={btnRef}
                            _hover={{ bg: '#1A202C'}}
                            _active={{ bg: '#1A202C'}}
                            bgColor='gray.800'
                            color='gray.400'
                            icon={<IoFunnel/>}
                            onClick={onOpen}
                        />
                    </Tooltip>
                </Flex>
            </Flex>
            <Drawer
            isOpen={isOpen}
            placement={'left'}
            onClose={onClose}
            finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent bgColor='gray.400'>
                    <DrawerCloseButton />
                    <Filter />
                </DrawerContent>
            </Drawer>
        </>
        
    )
}