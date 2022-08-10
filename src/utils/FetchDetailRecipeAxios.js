// Import
import axios from 'axios'

// Function
async function FetchDetailRecipeAxios(queryAdress) {
    try {
        const response = await axios.get(queryAdress)
        return response
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
            console.log(error.response.statuts)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error : ', error.message)
        }
        console.log(error.config)
    }
}

export default  FetchDetailRecipeAxios ;
