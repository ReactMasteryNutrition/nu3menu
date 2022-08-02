// Import
import axios from 'axios'

const qs = require('qs')


async function FetchAxios(thingSearched, filter) {

    let urlInit = 'https://api.edamam.com/api/recipes/v2?'

    let endOfParams = Object.fromEntries(Object.entries(filter).filter(([key, value]) => value !==''))
    //console.log('endOfParams', endOfParams)
    
    try {
        let endOfUrl = qs.stringify(endOfParams)
        console.log('endOfUrl ==> ', endOfUrl)


        let urlFinal = `${urlInit}${endOfUrl}`
        //console.log('urlFinal ==> ', urlFinal)


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
