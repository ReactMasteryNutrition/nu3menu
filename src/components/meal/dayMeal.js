import React from "react";
import { Box, Center, Divider, Heading, HStack} from "@chakra-ui/react";
import Oneday from "./oneDay";



const DayMeal = () =>{

let week =  localStorage.getItem('week')
let weekParse = JSON.parse(week)
const keyWeek = Object.keys(weekParse)


//const handleClickDelete = () =>{
  //  localStorage.removeItem('week')
//}


console.log(`${keyWeek} voila les clef`)
console.log(`teste recupération week  ${week}`)
//console.log(`${weekParse.lundi.matin.data.recipe.label} on est parser`)
    return(
        <Box  w='100%' p={4} color={"green.400"}>
            <Center>
            <Heading as='h1' size='xl'> Tout mes menus</Heading>
            </Center>
            <Divider/>
            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[0]}
            categorykey={"Matin"}
            sourceImg={weekParse?.lundi?.matin?.data?.recipe?.image}
            title={weekParse?.lundi?.matin?.data?.recipe?.label}
            urlData={weekParse?.lundi?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[0]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.lundi?.deujeuner?.data?.recipe?.image}
            title={weekParse?.lundi?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.lundi?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[0]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.lundi?.diner?.data?.recipe?.image}
            title={weekParse?.lundi?.diner?.data?.recipe?.label}
            urlData={weekParse?.lundi?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>

            <Divider/>

            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[1]}
            categorykey={"Matin"}
            sourceImg={weekParse?.mardi?.matin?.data?.recipe?.image}
            title={weekParse?.mardi?.matin?.data?.recipe?.label}
            urlData={weekParse?.mardi?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[1]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.mardi?.deujeuner?.data?.recipe?.image}
            title={weekParse?.mardi?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.mardi?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[1]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.mardi?.diner?.data?.recipe?.image}
            title={weekParse?.mardi?.diner?.data?.recipe?.label}
            urlData={weekParse?.mardi?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>

            <Divider/>

            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[2]}
            categorykey={"Matin"}
            sourceImg={weekParse?.mercredi?.matin?.data?.recipe?.image}
            title={weekParse?.mercredi?.matin?.data?.recipe?.label}
            urlData={weekParse?.mercredi?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[2]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.mercredi?.deujeuner?.data?.recipe?.image}
            title={weekParse?.mercredi?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.mercredi?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[2]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.mercredi?.diner?.data?.recipe?.image}
            title={weekParse?.mercredi?.diner?.data?.recipe?.label}
            urlData={weekParse?.mercredi?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>

            <Divider/>

            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[3]}
            categorykey={"Matin"}
            sourceImg={weekParse?.jeudi?.matin?.data?.recipe?.image}
            title={weekParse?.jeudi?.matin?.data?.recipe?.label}
            urlData={weekParse?.jeudi?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[3]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.jeudi?.deujeuner?.data?.recipe?.image}
            title={weekParse?.jeudi?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.jeudi?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[3]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.jeudi?.diner?.data?.recipe?.image}
            title={weekParse?.jeudi?.diner?.data?.recipe?.label}
            urlData={weekParse?.jeudi?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>

            <Divider/>

            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[4]}
            categorykey={"Matin"}
            sourceImg={weekParse?.vendredi?.matin?.data?.recipe?.image}
            title={weekParse?.vendredi?.matin?.data?.recipe?.label}
            urlData={weekParse?.vendredi?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[4]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.vendredi?.deujeuner?.data?.recipe?.image}
            title={weekParse?.vendredi?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.vendredi?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[4]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.vendredi?.diner?.data?.recipe?.image}
            title={weekParse?.vendredi?.diner?.data?.recipe?.label}
            urlData={weekParse?.vendredi?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>

            <Divider/>

            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[5]}
            categorykey={"Matin"}
            sourceImg={weekParse?.samedi?.matin?.data?.recipe?.image}
            title={weekParse?.samedi?.matin?.data?.recipe?.label}
            urlData={weekParse?.samedi?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[5]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.samedi?.deujeuner?.data?.recipe?.image}
            title={weekParse?.samedi?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.samedi?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[5]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.samedi?.diner?.data?.recipe?.image}
            title={weekParse?.samedi?.diner?.data?.recipe?.label}
            urlData={weekParse?.samedi?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>

            <Divider/>

            <Center>
            <HStack spacing={'24px'}>
            <Oneday
            kiyWeek={keyWeek[6]}
            categorykey={"Matin"}
            sourceImg={weekParse?.dimanche?.matin?.data?.recipe?.image}
            title={weekParse?.dimanche?.matin?.data?.recipe?.label}
            urlData={weekParse?.dimanche?.matin?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[6]}
            categorykey={"Déjeuner"}
            sourceImg={weekParse?.dimanche?.deujeuner?.data?.recipe?.image}
            title={weekParse?.dimanche?.deujeuner?.data?.recipe?.label}
            urlData={weekParse?.dimanche?.deujeuner?.data?.recipe?.url}/>
            <Oneday
            kiyWeek={keyWeek[6]}
            categorykey={"Dîner"}
            sourceImg={weekParse?.dimanche?.diner?.data?.recipe?.image}
            title={weekParse?.dimanche?.diner?.data?.recipe?.label}
            urlData={weekParse?.dimanche?.diner?.data?.recipe?.url}/>
            </HStack>
            </Center>
            
            <Divider/>


            
       </Box>

    )

}


 export default DayMeal;