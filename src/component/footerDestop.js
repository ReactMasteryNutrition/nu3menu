import React from "react";
import './footerDestop.css'
import { Button, IconButton } from '@chakra-ui/react'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'


const FooterDestop = () => {

    return (
        <div className="container__footerDestop">
            <Button background={"green.400"}/>
            <IconButton
                colorScheme='green'
                aria-label='Search database'
                icon={<FaFacebook />}
            />
            <IconButton
                colorScheme='yellow'
                aria-label='Search database'
                icon={<FaTwitter />}
            />
            <IconButton
                colorScheme='whatsapp'
                aria-label='Search database'
                icon={<FaInstagram />}
            />


        </div>

    )
}

export default FooterDestop