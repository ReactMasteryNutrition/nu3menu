import * as React from 'react'
import { Box } from '@chakra-ui/react'

import SearchBar from '../../components/SearchAndFilter/SearchBar'
import { CardMenu } from '../../components/Card/CardMenu'


const NutriHomeVisitor = () => {

    return (
        <>
            <Box w="100%" display='flex' flex-grow='1' flexDir={['column', 'row']}>
                <Box>
                    <SearchBar />
                    <CardMenu />
                </Box>
            </Box>
        </>
    )
}

export default NutriHomeVisitor;