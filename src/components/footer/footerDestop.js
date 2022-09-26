import React from "react";
import { socialIconLink, linkListFooter } from '../data/dataLink';
import { MdSettings } from 'react-icons/md'
import { Flex, IconButton, Image, List, ListIcon, ListItem, Wrap, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom'


const FooterDestop = () => {
    return (


        <Wrap bg='gray.800' justify='space-between' paddingX='1rem' paddingY='2rem' align='center' spacing='2rem'>
            <WrapItem>
                <Image w='12rem' src='./images/logo_nu3menu.svg' alt="NU3MENU" />
            </WrapItem>
            <WrapItem>
                <Flex>
                    {socialIconLink.map((data) =>
                        <Link key={data.id} to={data.to} rel= "noreferrer noopener" target="_blank">
                            <IconButton aria-label='Details' icon={data.label} marginX='0.5rem' color={data.colori} bgColor='gray.800'/>
                        </Link>)}
                </Flex>
            </WrapItem>
            <WrapItem>
                <List display={'flex'} alignItems={'center'} gap={'0.5em'} >
                    {linkListFooter.map((data) => <ListItem key={data.id} color={"green.500"}>
                        <ListIcon as={MdSettings} color='green.500' />
                        <Link to={data.url} rel= "noreferrer noopener" target="_blank">{data.label}</Link>
                    </ListItem>)}
                </List>
            </WrapItem>
        </Wrap>

    )
}

export default FooterDestop