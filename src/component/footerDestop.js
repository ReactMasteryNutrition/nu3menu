import React from "react";
import './footerDestop.css'
import { IconButton } from '@chakra-ui/react'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'


const FooterDestop = () => {

    return (
        <div className="container__footerDestop">
            <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<FaFacebook />}
            />
            <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<FaTwitter />}
            />
            <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<FaInstagram />}
            />


        </div>

    )
}

export default FooterDestop