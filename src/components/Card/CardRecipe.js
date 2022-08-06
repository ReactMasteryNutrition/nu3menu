// Imports //
import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Link, Text, VStack } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoFlash, IoPeople, IoTimer } from 'react-icons/io5'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
// Functions //

export default function CardRecipe(datas) {

    const recipesDatas = datas.datas.data.hits
    console.log('recipesDatas')
    console.log(recipesDatas)
    // console.log(typeof recipesDatas)
    
    return(
        <Box w='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
            {recipesDatas.map(recipe => {
                return(
                    <Box key={recipesDatas.indexOf(recipe)} w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                    <Grid 
                        templateAreas={[`"image image stats stats"
                                        "title title title openDetails"`, 
                                        `"image image image image"
                                        "title title title title"
                                        "stats stats stats openDetails"`]}
                        gridTemplateColumns='1fr 1fr 1.5fr 0.5fr'
                        w='100%'
                    >
                        <GridItem area='image' display='flex' justifyContent={['start', 'center']}>
                            <Image src={recipe.recipe.image} alt={recipe.recipe.label} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                        </GridItem>
                        <GridItem display='flex' alignItems='center' paddingY='0.5rem' area='title'>
                            <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' noOfLines={1}>{recipe.recipe.label}</Text>
                        </GridItem>
                        <GridItem area='stats' paddingLeft='0.5rem'>
                            <VStack spacing='0.5' align='left'>
                                <IconContext.Provider value={{ size: '1.5rem', color: '#276749'}}>
                                    <Flex>
                                        <IoTimer/>
                                        <Text marginLeft='0.5rem'>{toHoursAndMinutes(recipe.recipe.totalTime)}</Text>
                                    </Flex>
                                    <Flex>
                                        <IoPeople/>
                                        <Text marginLeft='0.5rem'>{recipe.recipe.yield}</Text>
                                    </Flex>
                                    <Flex>
                                        <IoFlash/>
                                        <Text marginLeft='0.5rem'>{recipe.recipe.calories.toFixed(2)} Kcal</Text>
                                    </Flex>
                                </IconContext.Provider>
                            </VStack>
                        </GridItem>
                        <GridItem area='openDetails' display='flex' alignItems='end' justifyContent='end'>
                            <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                                <Link>
                                    <IoEnter/>
                                </Link>
                            </IconContext.Provider>
                        </GridItem>
                    </Grid>
                    </Box>
                )
            })}
        </Box>
    )
}