// Import
import axios from 'axios'

const qs = require('qs')


async function FetchAxiosWithSpoon(filter) {

    let urlInit = 'https://api.spoonacular.com/recipes/complexSearch?'
    let params = filter
    
    try {
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
