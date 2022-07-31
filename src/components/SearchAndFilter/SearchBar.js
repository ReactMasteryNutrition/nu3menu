// Imports 
import React from 'react'
import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, InputLeftElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, StatHelpText, Tooltip, useDisclosure } from '@chakra-ui/react'
import { IoFunnel, IoFunnelOutline, IoSearch } from 'react-icons/io5'
import Filter from '../../components/SearchAndFilter/Filter'
// Functions
export default function SearchBar({thingSearched, handleSearch, filter, setFilter}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [recipeSearched, setRecipeSearched] = React.useState(thingSearched)

    const submit = (e) => {
        e.preventDefault();
        console.log("On lance la requête : ", thingSearched);
        setFilter({
            ...filter,
            q: thingSearched
        })
        handleSearch(recipeSearched)
    }

    return(
        <>  
            <Flex justify='center' w='full'>
                <Flex w={['100%', '75%', '50%', '33%']} paddingX='1em' marginTop='1em'>
                    <form style={{width: '100%'}} onSubmit={submit}>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                borderColor='green.50'
                                color='green.400'
                                children={<IoSearch />}
                            />
                            <Input type='search' placeholder='Recette' color='green.50' focusBorderColor='green.400' value={recipeSearched} onChange={e => setRecipeSearched(e.target.value)}/>
                        </InputGroup>
                    </FormControl>
                    </form>
                    <Tooltip label='Filtrer'>
                        <IconButton
                            ref={btnRef}
                            _hover={{ bg: '#1A202C'}}
                            _active={{ bg: '#1A202C'}}
                            bgColor='gray.800'
                            color='gray.400'
                            icon={<IoFunnel/>}
                            onClick={onOpen}
                            display={['flex', 'flex', 'none']}
                        />
                    </Tooltip>
                </Flex>
            </Flex>
            <Drawer
            isOpen={isOpen}
            placement={'left'}
            onClose={onClose}
            finalFocusRef={btnRef}
            size={['full', 'xs']}
            >
                <DrawerOverlay/>
                <DrawerContent bgColor='gray.400' paddingX='auto'>
                    <DrawerCloseButton />
                    <Filter filter={filter} setFilter={setFilter}/>
                </DrawerContent>
            </Drawer>
        </>
        
    )
}