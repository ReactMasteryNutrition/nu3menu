import React from "react";
import { Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
//import { weekMenu } from "../data/weekMenu";


const DayMeal = ({mealDayy,category}) =>{
//console.log(`daymeal funtion ${mealDayy}`)
//console.log(`teste dans ajout ${weekMenu[0].lundi.matin} `)
//console.log(`ici les weekmenu ${weekMenu[2].day}`)
let week =  localStorage.getItem('week')
let weekParse = JSON.parse(week)
console.log(`teste recupération week  ${week}`)
console.log(`${weekParse} on est parser`)
    return(
        <Box  w='100%' p={4} color={"green.400"}>
            <Heading as='h1' size='xl'> Tout mes menus</Heading>
            <Flex direction={'column'}>
            {weekParse.map((dat)=> <Heading as='h3' size='xl'> {dat.day}</Heading>)}
            <Text>{category}</Text>
            <Image src="../data/fraise.jpg" alt="rimage" />
            <Text>{week}</Text>

            </Flex>   
       </Box>

    )

}


 export default DayMeal;