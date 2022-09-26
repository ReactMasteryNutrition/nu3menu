// Import
import axios from 'axios'

// Function
async function FetchDetailRecipeAxios(queryAdress) {
    try {
        const response = await axios.get(queryAdress)
        return response
    } catch (error) {
        if(error.response) {
            throw error.response
        } else if (error.request) {
            throw error.request
        } else {
            
        }
        throw error.config
    }
}

export default  FetchDetailRecipeAxios ;
