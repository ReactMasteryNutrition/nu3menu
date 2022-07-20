import React from "react";
import './footerDestop.css'
//import { Button, IconButton } from '@chakra-ui/react'
import { socialIconLink, linkListFooter } from "./dataLink";
import { MdSettings } from 'react-icons/md'
//import{Icon} from '@chakra-ui/react'
import { Link, Image, HStack, List, ListIcon, ListItem, Box } from '@chakra-ui/react';



const FooterDestop = () => {

    const divStyle = {
        display: 'flex',
    }


    return (

        <HStack direction={'row'} bg={"gray.800"} h={"5%"} justify={"space-between"}>

            <Image h={"50px"} src='./images/logo_nu3menu.svg' alt="NU3MENU" />
            <Box  display="grid" gridGap={2} style={divStyle}  >
                {socialIconLink.map((data) =>
                    <Link key={data.id} href={data.to} color={data.colori}>{data.label}</Link>)}
            </Box>

            <List display={'flex'} alignItems={'center'} gap={'0.5em'} >
                {linkListFooter.map((data) => <ListItem key={data.id} color={"green.500"}>
                    <ListIcon as={MdSettings} color='green.500' />
                    <Link href={data.url}>{data.label}</Link>
                </ListItem>)}
            </List>



        </HStack>


    )
}

export default FooterDestop