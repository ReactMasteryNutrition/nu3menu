// Imports //
import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Link, Text, VStack } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoFlash, IoPeople, IoTimer } from 'react-icons/io5'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
// Functions //

export default function CardWithGrid() {

    return(
        // <Box w='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
        //     {recipesDatas.map(recipe => {
        //         return(
        //             <Box key={recipesDatas.indexOf(recipe)} w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
        //                 <Box display='flex' flexDirection={['row', 'column', 'column', 'column']}>
        //                     <Image src={recipe.recipe.image} alt={recipe.recipe.label} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
        //                     <Box>
        //                         <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' textAlign='center' noOfLines={1}>{recipe.recipe.label}</Text>
        //                         <VStack spacing='1rem' align='left' marginTop='1rem'>
        //                             <IconContext.Provider value={{ size: '2rem', color: '#276749'}}>
        //                                 <Flex>
        //                                     <IoTimer/>
        //                                     <Text marginLeft='1rem'>{toHoursAndMinutes(recipe.recipe.totalTime)}</Text>
        //                                 </Flex>
        //                                 <Flex>
        //                                     <IoPeople/>
        //                                     <Text marginLeft='1rem'>{recipe.recipe.yield}</Text>
        //                                 </Flex>
        //                             </IconContext.Provider>
        //                         </VStack>
        //                         <Box display='flex' justifyContent='right'>
        //                             <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
        //                                 <Link>
        //                                     <IoEnter/>
        //                                 </Link>
        //                             </IconContext.Provider>
        //                         </Box>
        //                     </Box>
        //                 </Box>
        //             </Box>
        //         )
        //     })}
        // </Box>
        <Box w='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
            <Box w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                <Grid 
                    templateAreas={[`"image image stats stats"
                                    "title title title openDetails"`, 
                                    `"image image image image"
                                    "title title title title"
                                    "stats stats stats openDetails"`]}
                    gridTemplateColumns='1fr 1fr 1.5fr 0.5fr'
                    w='100%'
                >
                    <GridItem bg='red.300' area='image' display='flex' justifyContent={['start', 'center']}>
                        <Image src='https://picsum.photos/280' alt='image' boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                    </GridItem>
                    <GridItem bg='purple.300' display='flex' alignItems='center' paddingY='0.5rem' area='title'>
                        <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' noOfLines={1}>Mon super titre de la mort qui tue </Text>
                    </GridItem>
                    <GridItem bg='green.300' area='stats' paddingLeft='0.5rem'>
                        <VStack spacing='0.5' align='left' bg='orange.300'>
                            <IconContext.Provider value={{ size: '1.5rem', color: '#276749'}}>
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
                                    <Text marginLeft='1rem'>999 Kcal</Text>
                                </Flex>
                            </IconContext.Provider>
                        </VStack>
                    </GridItem>
                    <GridItem bg='yellow.300' area='openDetails' display='flex' alignItems='end' justifyContent='end'>
                        <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                            <Link>
                                <IoEnter/>
                            </Link>
                        </IconContext.Provider>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}