import { Badge, Box, CircularProgress, CircularProgressLabel, Divider, Flex, Grid, GridItem, HStack, Image, ListItem, ModalBody, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { IoFlash, IoPeople, IoTimer } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
// Function
export default function DetailRecipeModal({detail}) {
    // Calcul des calories par personne
    let caloriesPerPerson = detail?.recipe?.calories/detail?.recipe?.yield

    let counterForList = 0

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
                        <Image src={detail?.recipe?.image} alt={detail?.recipe?.label} objectFit='cover' borderRadius='md'/>
                    </GridItem>
                    <GridItem area='stats'>
                        <VStack spacing='1' align={['center','start']} justify='space-around' h='100%'>
                            <Flex>
                                <IoTimer/>
                                <Text marginLeft='0.5rem'>{toHoursAndMinutes(detail?.recipe?.totalTime)}</Text>
                            </Flex>
                            <Flex>
                                <IoPeople/>
                                <Text marginLeft='0.5rem'>{detail?.recipe?.yield}</Text>
                            </Flex>
                            <Flex>
                                <IoFlash/>
                                <Text marginLeft='0.5rem'>{caloriesPerPerson.toFixed(2)} Kcal / person</Text>
                            </Flex>
                        </VStack>
                    </GridItem>
                    <GridItem area='caution'>
                        {detail?.recipe?.cautions.length !==0 ? <Text fontSize='2xl'>Cautions : </Text> : null}
                        {detail?.recipe?.cautions.length !==0 ? <Divider marginY='1rem'/> : null}
                        {detail?.recipe?.cautions.map(beCareful => {
                            return(
                                <Badge colorScheme='red' marginX='0.5rem'>{beCareful}</Badge>
                            )
                        })}
                        {detail?.recipe?.cautions.length !==0 ? <Divider marginY='1rem'/> : null}
                    </GridItem>
                    <GridItem area='donuts'>
                        <HStack w='100%' justifyContent={'space-around'} fontSize='xl'>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.recipe?.totalDaily.CHOCDF.quantity/detail?.recipe?.yield} color='purple.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.recipe?.totalDaily.CHOCDF.quantity/detail?.recipe?.yield)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.recipe?.totalDaily.CHOCDF.label}</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.recipe?.totalDaily.FAT.quantity/detail?.recipe?.yield} color='yellow.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.recipe?.totalDaily.FAT.quantity/detail?.recipe?.yield)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.recipe?.totalDaily.FAT.label}</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.recipe?.totalDaily.PROCNT.quantity/detail?.recipe?.yield} color='pink.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.recipe?.totalDaily.PROCNT.quantity/detail?.recipe?.yield)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.recipe?.totalDaily.PROCNT.label}</Text>
                            </Box>
                        </HStack>
                    </GridItem>
                    <GridItem area='ingredients'>
                        <Text fontSize='2xl' mb='0.5rem'>List of ingredients : </Text>
                        <UnorderedList>
                            {   
                                detail?.recipe?.ingredientLines.map(ingredient => {
                                    counterForList+=1
                                return (
                                    <ListItem key={`ingredient_${counterForList}`} mb='0.5rem'>{ingredient}</ListItem>
                                )
                            })}
                        </UnorderedList>
                    </GridItem>
                </Grid>
            </IconContext.Provider>
        </ModalBody>
    )
}