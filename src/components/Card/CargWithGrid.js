// Imports //
import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Link, Text, VStack } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoFlash, IoPeople, IoTimer } from 'react-icons/io5'

// Functions //

export default function CardWithGrid() {
    
    return(
        <Box w='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
            <Box w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' display='flex' flexDir='column' overflow='hidden' borderRadius='md' bg='gray.400'>
                <Grid
                    templateAreas={[`"image image stat stat"
                                    "titre titre titre openrecipe"`,
                                    `"image image image image"
                                    "titre titre titre titre"
                                    "stat stat stat openrecipe"`]}              
                >
                    <GridItem bg='orange.300' area='image' justifySelf={['left', 'center']}>
                        <Image src='https://picsum.photos/600' alt='image' boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                    </GridItem>
                    <GridItem bg='pink.300' area='titre' alignSelf='center' paddingY='1rem'>
                        <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' textAlign='center' noOfLines={1}>Je suis un tritre super long de la mort qui tue</Text>
                    </GridItem>
                    <GridItem bg='gray.300' area='stat'>
                        <VStack align='left'>
                            <IconContext.Provider value={{ size: '2rem', color: '#276749'}}>
                                <Flex>
                                    <IoTimer/>
                                    <Text marginLeft='1rem'>00 h 40</Text>
                                </Flex>
                                <Flex>
                                    <IoPeople/>
                                    <Text marginLeft='1rem'>2</Text>
                                </Flex>
                                <Flex>
                                    <IoFlash/>
                                    <Text marginLeft='1rem'>444 Kcal</Text>
                                </Flex>
                            </IconContext.Provider>
                        </VStack>
                    </GridItem>
                    <GridItem bg='red.300' area='openrecipe'>
                        <Box display='flex' justifyContent='right'>
                            <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                                <Link>
                                    <IoEnter/>
                                </Link>
                            </IconContext.Provider>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}