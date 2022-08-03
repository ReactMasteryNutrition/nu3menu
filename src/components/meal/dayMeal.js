import React from "react";
import { Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";
//import { weekMenu } from "../data/weekMenu";


const DayMeal = ({currentUser,category}) =>{
//console.log(`daymeal funtion ${mealDayy}`)
//console.log(`teste dans ajout ${weekMenu[0].lundi.matin} `)
//console.log(`ici les weekmenu ${weekMenu[2].day}`)
let week =  localStorage.getItem('week')
let weekParse = JSON.parse(week)
const keyWeek = Object.keys(weekParse)

const handleClickDelete = () =>{
    localStorage.removeItem('week')
}

console.log(`${currentUser} coucou `)

console.log(`${keyWeek} voila les clef`)
console.log(`teste recupération week  ${week}`)
console.log(`${weekParse} on est parser`)
    return(
        <Box  w='100%' p={4} color={"green.400"}>
            <Heading as='h1' size='xl'> Tout mes menus</Heading>
            <Flex direction={'column'}>
            {keyWeek.map((dat)=> <Heading key={dat.i} as='h3' size='xl'> {dat}</Heading>)}
            <Text>{category}</Text>
            <Image src="../data/fraise.jpg" alt="rimage" />
            <Text>{week}</Text>
            <Flex alignItems={'center'}>
            <Button w={'20%'}  onClick ={handleClickDelete}>Supprimer</Button>
            </Flex>
            </Flex>  
       </Box>

    )

}


 export default DayMeal;