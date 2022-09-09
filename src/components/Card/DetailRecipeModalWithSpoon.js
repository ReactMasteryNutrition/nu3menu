import { Badge, Box, CircularProgress, CircularProgressLabel, Divider, Flex, Grid, GridItem, HStack, Image, ListItem, ModalBody, OrderedList, Text, Tooltip, UnorderedList, VStack } from '@chakra-ui/react'
import { IoFlash, IoPeople, IoTimer, IoStatsChart } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
// Function
export default function DetailRecipeModalWithSpoon({detail}) {
    // Calcul des calories par personne
    let caloriesPerPerson = detail?.nutrition?.nutrients[0]?.amount/detail?.servings

    let counterForList = 0

    return(
        <ModalBody color='green.50'>
            <IconContext.Provider value={{ size: '1.5rem', color: '#48BB78'}}>
                <Grid 
                    w='100%' 
                    templateAreas={[`"image"
                                    "stats"
                                    "donuts"
                                    "ingredients"
                                    "instructions"`,
                                    `"image stats"
                                    "donuts donuts"
                                    "ingredients ingredients"
                                    "instructions instructions"`
                                ]}
                    gap={4}
                >
                    <GridItem area='image' display='flex' justifyContent={['center', 'center', 'start']}>
                        <Image src={detail?.image} alt={detail?.title} boxSize='280' objectFit='cover' borderRadius='md'/>
                    </GridItem>
                    <GridItem area='stats'>
                        <VStack spacing='1' align={['center','start']} justify='space-around' h='100%'>
                            <Flex>
                                <IoTimer/>
                                <Text marginLeft='0.5rem'>{toHoursAndMinutes(detail?.readyInMinutes)}</Text>
                            </Flex>
                            <Flex>
                                <IoPeople/>
                                <Text marginLeft='0.5rem'>{detail?.servings}</Text>
                            </Flex>
                            <Flex>
                                <IoFlash/>
                                <Text marginLeft='0.5rem'>{caloriesPerPerson.toFixed(2)} Kcal / person</Text>
                            </Flex>
                            <Flex>
                                <IoStatsChart/>
                                <Text marginLeft='0.5rem'>Glycemic Index : {detail?.nutrition?.properties[0]?.amount}</Text>
                            </Flex>
                        </VStack>
                    </GridItem>
                    <GridItem area='donuts'>
                        <HStack w='100%' justifyContent={'space-around'} fontSize='xl'>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.nutrition?.nutrients[3]?.percentOfDailyNeeds} color='purple.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.nutrition?.nutrients[3]?.percentOfDailyNeeds)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.nutrition?.nutrients[3]?.name}</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.nutrition?.nutrients[1]?.percentOfDailyNeeds} color='yellow.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.nutrition?.nutrients[1]?.percentOfDailyNeeds)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.nutrition?.nutrients[1]?.name}</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <CircularProgress value={detail?.nutrition?.nutrients[8]?.percentOfDailyNeeds} color='pink.400' size='3rem'>
                                    <CircularProgressLabel>{Math.round(detail?.nutrition?.nutrients[8]?.percentOfDailyNeeds)}%</CircularProgressLabel>
                                </CircularProgress>
                                <Text>{detail?.nutrition?.nutrients[8]?.name}</Text>
                            </Box>
                        </HStack>
                    </GridItem>
                    <GridItem area='ingredients'>
                        <Text fontSize='2xl' mb='0.5rem'>List of ingredients : </Text>
                        <UnorderedList>
                            {   
                                detail?.nutrition.ingredients.map(ingredient => {
                                    let textConcat = `${ingredient?.amount} ${ingredient?.unit} of ${ingredient?.name}`
                                return (
                                    <ListItem key={`ingredient_${ingredient?.id}`} mb='0.5rem'>&bull;  {textConcat}</ListItem>
                                )
                            })}
                        </UnorderedList>
                    </GridItem>
                    <GridItem area='instructions'>
                        <Text fontSize='lg'>Instructions : </Text>
                        <OrderedList>
                            {detail?.analyzedInstructions[0].steps.map(step => {
                                    counterForList+=1
                                    let instructionConcat =`${counterForList}.  ${step.step}`
                                return(
                                    <ListItem key={`ingredient_${counterForList}`} mb='0.5rem'>{instructionConcat}</ListItem>
                                )
                            })}
                        </OrderedList>
                    </GridItem>
                </Grid>
            </IconContext.Provider>
        </ModalBody>
    )
}