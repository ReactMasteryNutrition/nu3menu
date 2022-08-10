// Imports 
import { Badge, Box, CircularProgress, CircularProgressLabel, Divider, Flex, Grid, GridItem, HStack, Image, ListItem, ModalBody, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { IoFlash, IoPeople, IoTimer } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
// Function
export default function DetailRecipeModal({detail}) {
    //console.log(detail)

    let caloriesPerPerson = detail?.data?.recipe?.calories/detail?.data?.recipe?.yield

    return(
        <ModalBody color='green.50'>
            <IconContext.Provider value={{ size: '1.5rem', color: '#48BB78'}}>
                <Grid 
                    w='100%' 
                    templateAreas={[`"image"
                                    "stats"
                                    "caution"
                                    "donuts"
                                    "ingredients"`,
                                    `"image stats"
                                    "caution caution"
                                    "donuts donuts"
                                    "ingredients ingredients"`
                                ]}
                    gap={4}
                >
                    <GridItem area='image' display='flex' justifyContent={['center', 'center', 'start']}>
                        <Image src={detail?.data?.recipe?.image} alt={detail?.data?.recipe?.label} objectFit='cover' borderRadius='md'/>
                    </GridItem>
                    <GridItem area='stats'>
                        <VStack spacing='1' align={['center','start']} justify='space-around' h='100%'>
                            <Flex>
                                <IoTimer/>
                                <Text marginLeft='0.5rem'>{toHoursAndMinutes(detail?.data?.recipe?.totalTime)}</Text>
                            </Flex>
                            <Flex>
                                <IoPeople/>
                                <Text marginLeft='0.5rem'>{detail?.data?.recipe?.yield}</Text>
                            </Flex>
                            <Flex>
                                <IoFlash/>
                                <Text marginLeft='0.5rem'>{caloriesPerPerson.toFixed(2)} Kcal / person</Text>
                            </Flex>
                        </VStack>
                    </GridItem>
                    <GridItem area='caution'>
                        {detail?.data?.recipe?.cautions.length !==0 ? <Text fontSize='2xl'>Cautions : </Text> : null}
                        {detail?.data?.recipe?.cautions.length !==0 ? <Divider marginY='1rem'/> : null}
                        {detail?.data?.recipe?.cautions.map(beCareful => {
                            return(
                                <Badge colorScheme='red' marginX='0.5rem'>{beCareful}</Badge>
                            )
                        })}
                        {detail?.data?.recipe?.cautions.length !==0 ? <Divider marginY='1rem'/> : null}
                    </GridItem>
                    <GridItem area='donuts'>
                        <HStack w='100%' justifyContent={'space-around'} fontSize='xl'>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.data?.recipe?.totalDaily.CHOCDF.quantity/detail?.data?.recipe?.yield} color='purple.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.data?.recipe?.totalDaily.CHOCDF.quantity/detail?.data?.recipe?.yield)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.data?.recipe?.totalDaily.CHOCDF.label}</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.data?.recipe?.totalDaily.FAT.quantity/detail?.data?.recipe?.yield} color='yellow.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.data?.recipe?.totalDaily.FAT.quantity/detail?.data?.recipe?.yield)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.data?.recipe?.totalDaily.FAT.label}</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.data?.recipe?.totalDaily.PROCNT.quantity/detail?.data?.recipe?.yield} color='pink.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.data?.recipe?.totalDaily.PROCNT.quantity/detail?.data?.recipe?.yield)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.data?.recipe?.totalDaily.PROCNT.label}</Text>
                            </Box>
                        </HStack>
                    </GridItem>
                    <GridItem area='ingredients'>
                        <Text fontSize='2xl' mb='0.5rem'>List of ingredients : </Text>
                        <UnorderedList>
                            {detail?.data?.recipe?.ingredientLines.map(ingredient => {
                                return (
                                    <ListItem key={`ingredient${detail?.data?.recipe?.ingredientLines.indexOf(ingredient)}`} mb='0.5rem'>{ingredient}</ListItem>
                                )
                            })}
                        </UnorderedList>
                    </GridItem>
                </Grid>
            </IconContext.Provider>
        </ModalBody>
    )
}