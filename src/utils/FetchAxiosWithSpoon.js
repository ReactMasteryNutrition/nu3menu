import axios from 'axios'

const qs = require('qs')

async function FetchAxiosWithSpoon(filter) {

    let urlInit = 'https://api.spoonacular.com/recipes/complexSearch?'
    let params = filter
    const controller = new AbortController();
    try {
        const response = await axios.get(urlInit, {
            params,
            paramsSerializer: function (params) {
                return qs.stringify(params)
            }
        })
        return response
    } catch (error) {
        if (error.response) {
            throw error.response
        } else if (error.request) {
            throw error.request
        } else {
            
        }
        throw error
    } finally {
        controller.abort()
    }
}

export default FetchAxiosWithSpoon;
