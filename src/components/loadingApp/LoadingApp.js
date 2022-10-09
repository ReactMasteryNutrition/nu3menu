import { Box, CircularProgress } from "@chakra-ui/react"
import { useAuth } from "../../context/authContext"
import { ResponsiveWidth } from "../../utils/helper"

const LoadingApp = () => {
    const { currentUser } = useAuth()
    return (
        <Box role='alert' w="100%" flexGrow='1' >
            {!currentUser ?
                <CircularProgress
                    isIndeterminate
                    color='#48BB78'
                    size="90%"
                    position="fixed"
                    left="50%"
                    top={ResponsiveWidth() ? "55%" : "30%"}
                    transform="translate(-50%, -50%)"
                />
                : null}
        </Box>
    )
}

export default LoadingApp