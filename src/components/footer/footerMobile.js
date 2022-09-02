import React from "react";
import { VStack, Box, Image, ButtonGroup, IconButton, List, ListIcon, ListItem, Link } from '@chakra-ui/react';
import { socialIconLink, linkListFooter } from '../data/dataLink';
import { MdSettings } from 'react-icons/md'

const FooterMobile = () => {
    //const postition = {
    //  position : "relative"
    //}
    //style={postition}


    return (

        <VStack padding='2rem' paddingBottom='6rem' spacing='2rem'>
            <Box>
                <Image width='12rem' src='./images/logo_nu3menu.svg' alt="NU3MENU" />
            </Box>
            <Box>
                <ButtonGroup variant="ghost">
                    {socialIconLink.map((data) => <IconButton
                        key={data.id}
                        as="a"
                        color={data.colori}
                        href={data.to}
                        aria-label={data.aLabel}
                        icon={data.label}
                    />)}
                </ButtonGroup>
            </Box>
            <Box>
                <List spacing={3}>
                    {linkListFooter.map((data) => <ListItem key={data.id} color={"green.500"}>
                        <ListIcon as={MdSettings} color='green.500' />
                        <Link href={data.url}>{data.label}</Link>
                    </ListItem>)}
                </List>
            </Box>
        </VStack>
    )
}

export default FooterMobile;