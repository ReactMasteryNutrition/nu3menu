import React from "react";
import { socialIconLink, linkListFooter } from "./dataLink";
import { MdSettings } from 'react-icons/md'
import { Flex, Image, Link, List, ListIcon, ListItem, Wrap, WrapItem } from '@chakra-ui/react';



const FooterDestop = () => {
    return (

        <Wrap bg='gray.800' justify='space-between' paddingX='1rem' paddingY='2rem' align='center' spacing='2rem'>
            <WrapItem>
                <Image w='12rem' src='./images/logo_nu3menu.svg' alt="NU3MENU" />
            </WrapItem>
            <WrapItem>
                <Flex>
                    {socialIconLink.map((data) =>
                        <Link key={data.id} href={data.to} color={data.colori} marginX='0.5rem'>{data.label}</Link>)}
                </Flex>
            </WrapItem>
            <WrapItem>
                <List display={'flex'} alignItems={'center'} gap={'0.5em'} >
                    {linkListFooter.map((data) => <ListItem key={data.id} color={"green.500"}>
                        <ListIcon as={MdSettings} color='green.500' />
                        <Link href={data.url}>{data.label}</Link>
                    </ListItem>)}
                </List>
            </WrapItem>
        </Wrap>

    )
}

export default FooterDestop