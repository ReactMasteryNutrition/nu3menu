// Imports 
import React from 'react'
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, FormControl, IconButton, Input, InputGroup, InputLeftElement, Tooltip, useDisclosure } from '@chakra-ui/react'
import { IoFunnel, IoSearch } from 'react-icons/io5'
//import Filter from './Filter'
import FilterParams from './FilterParams'
// Functions
export default function SearchBarSpoon({thingSearched, handleSearch, params, setParams}){
    // gestion ouverture et fermeture de la modal avec les filtres
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    // variable locale de la recette recherchée
    const [spoonSearched, setSpoonSearched] = React.useState(thingSearched)

    // Submit de la search bar avec mise à jour des paramètres
    const submit = (e) => {
        e.preventDefault();
        setParams({
            ...params,
            query: thingSearched
        })
        handleSearch(spoonSearched)
        //console.log(`On lance la requête pour : ${spoonSearched}`)
    }

    return(
        <>  
            <Flex justify='center' w={['100%', '100%', '60%']}>
                <Flex w='100%' px={['','1rem']} marginTop='1em'>
                <form style={{width: '100%'}} onSubmit={submit}>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                borderColor='green.50'
                                color='green.400'
                                children={<IoSearch />}
                            />
                            <Input type='search' placeholder='A tester ici...' color='green.50' focusBorderColor='green.400' value={spoonSearched} onChange={e => setSpoonSearched(e.target.value)}/>
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
                        />
                    </Tooltip>
                </Flex>
            </Flex>
            <Drawer
            isOpen={isOpen}
            placement={'right'}
            onClose={onClose}
            finalFocusRef={btnRef}
            size={['full', 'xs']}
            >
                <DrawerOverlay/>
                <DrawerContent bgColor='gray.400' w='100%' overflow='scroll' >
                    <DrawerCloseButton />
                    <FilterParams filter={params} setFilter={setParams}/>
                </DrawerContent>
            </Drawer>
        </>
        
    )
}