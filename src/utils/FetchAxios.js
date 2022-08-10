// Import
import axios from 'axios'

const qs = require('qs')


async function FetchAxios(thingSearched, filter) {

    let urlInit = 'https://api.edamam.com/api/recipes/v2?'

    let endOfParams = Object.fromEntries(Object.entries(filter).filter(([key, value]) => value !==''))
    
    try {
        let endOfUrl = qs.stringify(endOfParams)

        let urlFinal = `${urlInit}${endOfUrl}`
        
        const response = await axios.get(urlFinal)
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

export default  FetchAxios ;
