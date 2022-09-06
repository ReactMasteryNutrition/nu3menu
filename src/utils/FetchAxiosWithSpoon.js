// Import
import axios from 'axios'

const qs = require('qs')


async function FetchAxiosWithSpoon(searched) {

    let urlInit = 'https://api.spoonacular.com/recipes/complexSearch?'
    let apiKey = '12c558bccb4f43a3b13072870c7183e9'
    let params = {
        apiKey: '12c558bccb4f43a3b13072870c7183e9',
        fillIngredients: true, 
        addRecipeInformation: true, 
        addRecipeNutrition: true, 
        number: 20,
        query: searched
    }

    //let endOfParams = Object.fromEntries(Object.entries(filter).filter(([key, value]) => value !==''))
    
    try {
        //let endOfUrl = qs.stringify(endOfParams)

        //let urlFinal = `${urlInit}${endOfUrl}`
        
        const response = await axios.get(urlInit, {
            params,
            paramsSerializer: function (params) {
                return qs.stringify(params)
            }
        })
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

export default  FetchAxiosWithSpoon ;
