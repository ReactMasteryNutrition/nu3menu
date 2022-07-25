import * as React from 'react'
import { SearchBar } from '../../components/SearchAndFilter/SearchBar'
import { CardMenu } from '../../components/Cards/CardMenu'
import { Box } from '@chakra-ui/react'

const NutriHomeVisitor = () => {

    return (
        <>
            <Box w="100%" display='flex' flexDir={['column', 'row']}>
                <Box>
                    <SearchBar />
                    <CardMenu />
                </Box>
            </Box>
        </>
    )
}

export default NutriHomeVisitor;