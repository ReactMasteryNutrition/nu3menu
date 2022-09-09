import React from "react";
import { Box, Center, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { Navigate } from 'react-router-dom';

const Oneday = ({ kiyWeek, categorykey, sourceImg, title, urlData, buttonToOpenModal }) => {
    return (
        <>
            {!sourceImg || !title || !urlData ?
                <Navigate to={'/'} />
                :
                <Flex direction={'column'} bgColor='gray.200'>
                    <Center p='1rem'>
                        <Text>{categorykey}</Text>
                    </Center>
                    <Image boxSize='280' borderRadius='md' src={sourceImg} alt={title} objectFit='cover' bgColor='red.300' />
                    <Box w={'100%'} bgColor='pink.200'>
                        <Text fontSize={['lg']} fontWeight='bold' noOfLines={1} mx='1rem'>{title}</Text>
                        <Flex w={'100%'} flexDir={['column', 'row']} alignItems={['', 'center']} justifyContent={['center', 'space-between']}>
                            <Link href={urlData} isExternal my='1rem' mx={['0', '0.5rem']}>
                                <Button leftIcon={<LinkIcon />} color='green.600'>How cook it ?</Button>
                            </Link>
                            <IconContext.Provider value={{ size: '3rem', color: '#276749' }}>
                                {buttonToOpenModal}
                            </IconContext.Provider>
                        </Flex>
                    </Box>
                </Flex>
            }

        </>
    )
}

export default Oneday;