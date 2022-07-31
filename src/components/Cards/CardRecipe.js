// Imports //
import React from 'react'
import { Box, Flex, Image, Link, Text, VStack } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoPeople, IoTimer } from 'react-icons/io5'
import { toHoursAndMinutes } from '../../util/HoursAndMinutes'
// Functions //

export default function CardRecipe(datas) {

    const recipesDatas = datas.datas.data.hits
    console.log('recipesDatas')
    console.log(recipesDatas)
    // console.log(typeof recipesDatas)
    
    return(
        <Box w='100%' minH='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
            {recipesDatas.map(recipe => {
                return(
                    <Box key={recipesDatas.indexOf(recipe)} w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                        <Box display='flex' flexDirection={['row', 'column', 'column', 'column']}>
                            <Image src={recipe.recipe.image} alt={recipe.recipe.label} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                            <Box>
                                <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' textAlign='center' noOfLines={1}>{recipe.recipe.label}</Text>
                                <VStack spacing='1rem' align='left' marginTop='1rem'>
                                    <IconContext.Provider value={{ size: '2rem', color: '#276749'}}>
                                        <Flex>
                                            <IoTimer/>
                                            <Text marginLeft='1rem'>{toHoursAndMinutes(recipe.recipe.totalTime)}</Text>
                                        </Flex>
                                        <Flex>
                                            <IoPeople/>
                                            <Text marginLeft='1rem'>{recipe.recipe.yield}</Text>
                                        </Flex>
                                    </IconContext.Provider>
                                </VStack>
                                <Box display='flex' justifyContent='right'>
                                    <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                                        <Link>
                                            <IoEnter/>
                                        </Link>
                                    </IconContext.Provider>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}