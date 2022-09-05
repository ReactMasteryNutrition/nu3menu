import { Box, CircularProgress } from "@chakra-ui/react"
import { ResponsiveWidth } from "../../utils/helper"

const LoadingApp = () => {
    return (
        <Box role='alert' w="100%" flexGrow='1' >
            <CircularProgress
                isIndeterminate
                color='#48BB78'
                size="90%"
                position="fixed"
                left="50%"
                top={ResponsiveWidth() ? "55%" : "30%"}
                transform="translate(-50%, -50%)"
            />
        </Box>
    )
}

export default LoadingApp