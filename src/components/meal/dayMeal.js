import React from "react";
import { Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import { weekMenu } from "../data/weekMenu";


const DayMeal = ({mealDayy,category}) =>{

    return(
        <Box  w='100%' p={4} color={"green.400"}>
            <Heading as='h1' size='xl'> Tout mes menus</Heading>
            <Flex direction={'column'}>
            <Heading as='h3' size='xl'> {mealDayy}</Heading>
            <Text>{category}</Text>
            <Image src="../data/fraise.jpg" alt="rimage" />
            <Text>{weekMenu[0].lundi.matin}</Text>
            </Flex>   
       </Box>

    )

}


 export default DayMeal;