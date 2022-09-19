import { Box } from '@chakra-ui/react'
import PageNotFound from '../components/error/PageNotFound';

const Error404 = () => {
    return (
        <Box flexGrow='1'>
            <PageNotFound/>
        </Box>
    )
}

export default Error404;