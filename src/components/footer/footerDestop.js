import React from "react";
import './footerDestop.css'
//import { Button, IconButton } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {MdSettings} from 'react-icons/md'
//import{Icon} from '@chakra-ui/react'
import { Link, Image, HStack, List, ListIcon ,ListItem } from '@chakra-ui/react';
//import logoNu3 from './image/logo_nu3menu.svg'


const FooterDestop = () => {

    const socialIconLink = [
        { id: "fa", label: <FaFacebook />, to: "https://www.facebook.com", colori: "green.400" },
        { id: "tw", label: <FaTwitter />, to: "https://www.facebook.com", colori: "green.400" },
        { id: "in", label: <FaInstagram />, to: "https://www.facebook.com", colori: "green.400" }
    ]

    const linkListFooter = [
        {id : "PP" , url:"https://dietplannerapp.com/privacy-policy/" , label : "Privacy policy"},
        {id : "T" , url:"https://dietplannerapp.com/terms/" , label : "Therms"},
        {id : "C" , url:"" , label : "Contact"}
        
    ]

    const divStyle = {
        display: 'flex',

    }

    return (

        <HStack direction={'row'} bg={"gray.800"} h={"5%"} justify={"space-between"}>

            <Image h={"50px"} src='./images/logo_nu3menu.svg' alt="NU3MENU" />
            <div style={divStyle}>
                {socialIconLink.map((data) =>
                    <Link key={data.id} href={data.to} color={data.colori}>{data.label}</Link>)}
            </div>

            <List direction={'row'} spacing={3}>
               {linkListFooter.map((data)=> <ListItem key={data.id} color={"green.500"}>
                    <ListIcon as={MdSettings} color='green.500' />
                    <Link href={data.url}>{data.label}</Link>
                </ListItem>)}
            </List>



        </HStack>


    )
}

export default FooterDestop