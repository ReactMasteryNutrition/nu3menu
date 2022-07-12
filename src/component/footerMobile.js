import React from "react";
import { IconButton } from "@chakra-ui/react";
import {  BsListUl,  BsFillBookmarkFill, BsFillPersonFill} from 'react-icons/bs'
import { IoHome} from 'react-icons/io5'
import {  FiPlusCircle} from 'react-icons/fi'

const FooterMobile = () => {

    const nameIcon = [<IoHome/>, <BsListUl/>, <FiPlusCircle/>, <BsFillBookmarkFill/>, <BsFillPersonFill/> ]
    return (

        <div>
           { nameIcon.map((nom)=> <IconButton
                variant='ghost'
                colorScheme={'green.400'}
                aria-label='Call Sage'
                fontSize='40px'
                icon={nom}
            />
            )}
        </div>
    )
}

export default FooterMobile;