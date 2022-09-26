import React from "react";
import { Box, Center,Flex, Text, Image, Button} from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { LinkIcon } from "@chakra-ui/icons";
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { Navigate } from 'react-router-dom';


const Oneday = ({ key, categorykey, sourceImg, title, urlData, buttonToOpenModal }) => {
    return (
        
        <>
            {   !sourceImg || !title || !urlData ?
                <Navigate to={'/'} />
                :
                <Flex w={['100%', '100%', '30%']} direction={'column'} key={key}>
                    <Center p='1rem'>
                        <Text>{categorykey}</Text>
                    </Center>
                    <Image borderRadius='md' src={sourceImg} alt={title} objectFit='cover'/>
                    <Box w={'100%'}>
                        <Text fontSize={['lg']} fontWeight='bold' noOfLines={1} mx='1rem'>{ title }</Text>
                        <Flex  w={'100%'} flexDir={['column', 'row']} alignItems={['', 'center']} justifyContent={['center', 'space-between']}>
                            <Link to={urlData} target="_blank" >
                                <Button leftIcon={<LinkIcon />} color='green.600' my='1rem' mx={['0', '0.5rem']}>How cook it ?</Button>
                            </Link>
                            <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
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