import React from "react";
import { Box, Heading, List, ListItem} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const DayMeal = () =>{

    return(
        <Box  w='100%' p={4} color='white'>
            <Heading as='h2' size='xl'> Tout mes menus</Heading>
            <List>
                <ListItem>
                    <Link to='/'>Lundi</Link>
                </ListItem>
                <ListItem>
                    <Link to='/'>Mardi</Link>
                </ListItem>
                <ListItem>
                    <Link to='/'>Mercredi</Link>
                </ListItem>
                <ListItem>
                    <Link to='/'>Jeudi</Link>
                </ListItem>
                <ListItem>
                    <Link to='/'>Vendredi</Link>
                </ListItem>
                <ListItem>
                    <Link to='/'>Samedi</Link>
                </ListItem>
                <ListItem>
                    <Link to='/'>Dimanche</Link>
                </ListItem>
            </List>
       </Box>

    )

}
// const DayMeal = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
   
//     return (
//             <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size="full">
//                 <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
//                 <DrawerContent bg="#f0fff4">
//                     <DrawerCloseButton />
//                     <div className='drawer__seperator--top'></div>
//                     <DrawerBody
//                         display="flex"
//                         flexDirection="column"
//                         gap="2rem"
//                         position="relative"
//                         top="5rem"
//                         margin="0 auto"
//                         fontWeight="bold"
//                         fontSize="1.2rem">
//                         <Link to='/user' >Lundi</Link>
//                         <Link to='/user/account' >Mardi</Link>
//                         <Link to='/user/allmenus' >Mercredi</Link>
//                         <Link to='/user/alladvices'>Jeudi</Link>
//                         <Link to='/user/notifications'>Vendredi</Link>
//                         <Link to='/user/helpandsupport'>Samedi</Link>
//                         <Link to='/' >Dimanche</Link>
//                     </DrawerBody>
//                 </DrawerContent>
//             </Drawer>
//     )
// }

 export default DayMeal;