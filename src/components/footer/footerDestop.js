import React from "react";
import './footerDestop.css'
//import { Button, IconButton } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
//import{Icon} from '@chakra-ui/react'
import { Link, Image, HStack} from '@chakra-ui/react';
import logoNu3 from '../image/logo_nu3menu.png'


const FooterDestop = () => {

    const socialIconLink = [
        { id: "fa", label: <FaFacebook />, to: "https://www.facebook.com", colori: "green.400" },
        { id: "tw", label: <FaTwitter />, to: "https://www.facebook.com", colori: "green.400" },
        { id: "in", label: <FaInstagram />, to: "https://www.facebook.com", colori: "green.400" }
    ]

    const divStyle = {
        display : 'flex',  
    }

    return (

        <HStack direction={'row'} bg={"gray.800"} h={"5%"} justify={"space-between"}>

            <Image h={"150px"} src={logoNu3} alt="NU3MENU" />

            <div style={divStyle}>
                {socialIconLink.map((data) =>
                    <Link key={data.id} href={data.to} color={data.colori}>{data.label}</Link>)}
            </div>
        </HStack>


    )
}

export default FooterDestop