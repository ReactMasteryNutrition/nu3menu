import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const EditButton = ({onOpen, ariaLabel}) => {
    return (
        <Button
            onClick={onOpen}
            padding="0.5rem 1.5rem"
            aria-label={ariaLabel}
            bg='#48bb78'
            color="#f0fff4"
            width="100%"
            _hover={{ bgColor: "#a0aec0" }}
        >
            Edit
        </Button>
    )
}

EditButton.propTypes = {
    onOpen: PropTypes.func,
    ariaLabel: PropTypes.string.isRequired
}

export {EditButton}