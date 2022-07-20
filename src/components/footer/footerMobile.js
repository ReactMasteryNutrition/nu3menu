import React from "react";
import { Wrap, WrapItem, Box, Image, ButtonGroup, IconButton, List, ListIcon, ListItem, Link } from '@chakra-ui/react';
import { socialIconLink, linkListFooter } from "./dataLink";
import { MdSettings } from 'react-icons/md'

const FooterMobile = () => {


    return (

        <footer>
            <Wrap direction={'column'}>
                <WrapItem>
                    <Box>
                        <Image h={"50px"} src='./images/logo_nu3menu.svg' alt="NU3MENU" />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box>
                        <ButtonGroup variant="ghost">
                            {socialIconLink.map((data) => <IconButton
                                as="a"
                                color={data.colori}
                                href={data.to}
                                aria-label={data.aLabel}
                                icon={data.label}
                            />)}
                        </ButtonGroup>
                        </Box>
                </WrapItem>
                <WrapItem>
                    <Box>
                        <List spacing={3}>
                            {linkListFooter.map((data) => <ListItem key={data.id} color={"green.500"}>
                                <ListIcon as={MdSettings} color='green.500' />
                                <Link href={data.url}>{data.label}</Link>
                            </ListItem>)}
                        </List>
                    </Box>
                </WrapItem>
            </Wrap>

        </footer>
    )
}

export default FooterMobile;